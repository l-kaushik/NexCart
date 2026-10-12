import Product from '../model/Product.js'
import cloudinary from '../config/cloudinary.js';
import fs from 'node:fs/promises';

const getProducts = async (req, res) => {
    try{
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.error("Products Controller Error", error);
        res.status(500).json({message: 'Server error'});
    }
}; 

const getProductById = async (req, res) => {
    try{
        const product = await Product.findById(req.params.id);
        if(!product) return res.status(404).json({message: 'Product not found'});
        return res.status(product);
    }  catch (error) {
        console.error("Products Controller Error", error);
        res.status(500).json({message: 'Server error'});
    }
};

const createProduct = async (req, res) => {
    try{
        const {name, description, price, category, stock} = req.body;
        let imageUrl = '';

        if (req.file) {
            try {
                const result = await cloudinary.uploader.upload(req.file.path);
                imageUrl = result.secure_url;
            } catch (error) {
                console.error('Cloudinary error message:', error.message);
                console.error('HTTP status:', error.http_code);
                console.error('Full error:', error);
            }  finally {
                await fs.unlink(req.file.path).catch((err) => {
                    console.error('Temporary file cleanup failed:', err.message);
                })
            }
        }
        
        const product = new Product({name, description, price, category, stock, imageUrl});
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);

    }  catch (error) {
        console.error("Products Controller Error", error);
        res.status(500).json({message: 'Server error'});
    }
};

const updateProduct = async (req, res) => {
    try{
        const {name, description, price, category, stock} = req.body;

        const product = await Product.findById(req.params.id);

        if(!product) return res.status(404).json({ message: 'Product not found'});
        product.name = name || product.name;
        product.description = description || product.description;
        product.price = price || product.price;
        product.category = category || product.category;
        product.stock = stock || product.stock;

        // TODO: remove old image

        if(req.file) {
            const result = await cloudinary.uploader.upload(req.file.path);
            product.imageUrl = result.secure_url;
        }

        const updateProduct = await product.save();
        res.json(updateProduct);

    }  catch (error) {
        console.error("Products Controller Error", error);
        res.status(500).json({message: 'Server error'});
    }
};

const deleteProduct = async (req, res) => {
    // TODO: remove product image from cloudinary
    try{
        const product = await Product.findById(req.params.id);

        if(!product) return res.status(404).json({message: 'Product not found'});
        await product.deleteOne();
        res.json({message: 'Product removed'});

    }  catch (error) {
        console.error("Products Controller Error", error);
        res.status(500).json({message: 'Server error'});
    }
};

export {getProducts, createProduct, getProductById, updateProduct, deleteProduct};