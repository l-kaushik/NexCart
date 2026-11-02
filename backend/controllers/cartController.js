import Cart from '../model/Cart.js'
import Product from '../model/Product.js';

const getAllProducts = async (req, res) => {
    try{
        const cart = await Cart.findOne({ user: req.user._id })
            .populate('items.product');

        if (!cart) {
            return res.status(404).json({
                message: 'Cart not found'
            });
        }

        res.status(200).json(cart);
    } catch (error) {
        console.error("Cart Controller Error", error);
        res.status(500).json({message: 'Error fetching cart'});
    }
}

const addProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) return res.status(404).json({message: "Product not found"});

        let cart = await Cart.findOne({ user: req.user._id });

        if (!cart) cart = new Cart({user: req.user._id, items: []});

        const existingItem = cart.items.find(
            item => item.product.toString() === product._id.toString()
        );

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.items.push({product: product._id,quantity: 1});
        }

        await cart.populate('items.product');

        cart.totalPrice = cart.items.reduce(
            (total, item) => total + item.product.price * item.quantity,
            0
        );
        
        cart.updatedAt = Date.now();

        await cart.save();

        await cart.populate('items.product');

        return res.status(200).json(cart);

    } catch (error) {
        console.error("Cart Controller Error", error);
        return res.status(500).json({
            message: 'Error adding product'
        });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id: productId } = req.params;
        const newQuantity = Number(req.body.quantity);

        if (!Number.isInteger(newQuantity) || newQuantity < 0) {
            return res.status(400).json({
                message: 'Quantity must be a non-negative integer'
            });
        }

        const product = await Product.findById(productId);

        if (!product) return res.status(404).json({message: 'Product not found'});

        let cart = await Cart.findOne({user: req.user._id});

        if (!cart) return res.status(404).json({message: 'Cart not found'});

        const cartItem = cart.items.find(item => item.product.toString() === productId);
        const existingQuantity = cartItem ? cartItem.quantity: 0;
        const quantityDifference = newQuantity - existingQuantity;

        // Validate stock when increasing quantity
        if (quantityDifference > 0 &&
            product.quantity < newQuantity) {
            return res.status(400).json({
                message: `Insufficient stock. Only ${product.quantity} item(s) available.`
            });
        }

        // Remove product when quantity is zero
        if (newQuantity === 0) {
            if (cartItem) {
                cart.items.pull({ _id: cartItem._id });
            }
        } else if (cartItem) {
            cartItem.quantity = newQuantity;
        } else {
            cart.items.push({
                product: product._id,
                quantity: newQuantity
            });
        }

        // Recalculate total price
        await cart.populate('items.product');

        cart.totalPrice = cart.items.reduce(
            (total, item) =>
                total + item.product.price * item.quantity,
            0
        );

        cart.updatedAt = Date.now();

        await cart.save();

        await cart.populate('items.product');

        return res.status(200).json({
            success: true,
            message: newQuantity === 0
                ? 'Product removed from cart'
                : 'Cart updated successfully',
            cart
        });

    } catch (error) {
        console.error('Cart Controller Error:', error);

        return res.status(500).json({
            message: 'Error updating product'
        });
    }
};



const removeProduct = async (req, res) => {
    try {
        const { id: productId } = req.params;

        const cart = await Cart.findOne({user: req.user._id});

        if (!cart) return res.status(404).json({message: 'Cart not found'});

        const itemIndex = cart.items.findIndex(
            item => item.product.toString() === productId
        );

        if (itemIndex === -1) return res.status(404).json({message: 'Product not found in cart' });

        cart.items.splice(itemIndex, 1);

        // Recalculate total price
        await cart.populate('items.product');

        cart.totalPrice = cart.items.reduce(
            (total, item) =>
                total + item.product.price * item.quantity,
            0
        );

        cart.updatedAt = Date.now();

        await cart.save();

        return res.status(200).json({
            success: true,
            message: 'Product removed successfully',
            cart
        });

    } catch (error) {
        console.error("Cart Controller Error", error);

        return res.status(500).json({
            message: 'Error removing product'
        });
    }
};



const clearCart = async (req, res) => {
    try {
        const cart = await Cart.findOneAndUpdate(
            { user: req.user._id },
            {
                $set: {
                    items: [],
                    totalPrice: 0,
                    updatedAt: Date.now()
                }
            },
            { returnDocument: 'after' }
        );

        if (!cart) return res.status(404).json({message: 'Cart not found'});
        
        return res.status(200).json({
            success: true,
            message: 'Cart cleared successfully',
            cart
        });

    } catch (error) {
        console.error("Cart Controller Error", error);

        return res.status(500).json({
            message: 'Error clearing cart'
        });
    }
};


export {getAllProducts, addProduct, updateProduct, removeProduct, clearCart};