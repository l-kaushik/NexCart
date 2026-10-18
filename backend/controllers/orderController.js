import Order from '../model/Order.js';
import sendEmail from '../utils/mailUtils.js';


const createOrder = async (req, res) => {
    try{
        const { items, totalAmount, address, paymentId } = req.body;

        if(!items || items.length === 0 || !totalAmount || !address) {
            return res.status(400).json({message: 'Invalid order data'});
        }

        const order = await Order.create({
            user: req.user._id,
            items,
            totalAmount,
            address,
            paymentId
        });
        await order.save();

        // TODO: only send mail after payment confirmation & send mail if order failed

        const message = `Dear ${req.user.name},\n\nThank you for your order! Your order has been successfully created with the following details:\n\nOrder ID: ${order._id}\nTotal Amount: ${totalAmount}\nShipping Address: ${address}\n\nWe will notify you once your order is shipped.\n\nBest Regards,\nNexCart Team`;

        await sendEmail(req.user.email, 'Order Created', message);
        res.status(201).json({message: 'Order created successfully', order});

    } catch (error) {
        console.error("Order Controller Error", error);
        res.status(500).json({message: 'Error creating order'});
    }
};

const getMyOrders = async (req, res) => {
    try{
        const orders = await Order.find({user: req.user._id}).populate('items.productId', 'name price');
        res.json(orders);
    } catch (error) {
        console.error("Order Controller Error", error);
        res.status(500).json({message: 'Error fetching orders'});
    }
};

// ADMIN

const getOrders = async (req, res) => {
    try{
        const orders = await Order.find({}).populate('user', 'id name');
        res.json(orders);
    } catch(error){
        console.error("Order Controller Error", error);
        res.status(500).json({message: 'Error fetching all orders'});
    }
}

const updateOrderStatus = async (req, res) => {
    try{
        const {status} = req.body;
        const order = await Order.findById(req.params.id);
        if(!order) return res.status(404).json({message: 'Order not found'});
        order.status = status;
        await order.save();
        res.json({message: 'Order status updated', order});
    } catch (error) {
        console.error("Order Controller Error", error);
        res.status(500).json({message: 'Error updating status'});
    }
};

export {createOrder, getMyOrders, getOrders, updateOrderStatus};