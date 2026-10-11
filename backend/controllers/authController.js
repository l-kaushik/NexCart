import User from '../model/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import sendEmail from '../utils/mailUtils.js';

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '30d'})
};

// Register a new user
const registerUser = async (req, res) => {
    const {name, email, password} = req.body;
    try {
        const existingUser =await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({message: 'User already exists'});
        }

        // TODO: Add transaction to make sure remove the user if anythig crash or move the creation at last

        // TODO: welcome mail

        // TODO: Hash the password before savin to database
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({name, email, password: hashedPassword});

        // TODO: OTP sending for email verification
        if(newUser) {
            const otp = Math.floor(10000 + Math.random() * 900000).toString();

            const message = `
            Your OTP for NexCart, ${name}!
            Your OTP for NexCart registration is: ${otp}
            `;

            await sendEmail(email, 'Welcome to Nexcart - Your OTP for Registration', message);

            return res.status(201).json({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
                token: generateToken(newUser._id)
            });
        }
        else {
            console.error("Register User Error:", error);
            return res.status(400).json({message: 'Invalid user data'});
        }
    }
    catch(error) {
        console.error("Register User Error:", error);
        return res.status(500).json({message: 'Internal Server error'});
    }
};


// Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne( { email });
        if (user && (await bcrypt.compare(password, user.password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateToken(user._id)
            });
        } else {
            return res.status(400).json({message: 'Invalid email or password'});
        }
    } catch (error) {
        console.error("Login User Error:", error);
        res.status(500).json({message: 'Internal Server errorr'});
    }
};



const getUsers = async(res, req) => {
    try{
        const users = await User.find({}).select('-password');
        res.join(users);
    } catch (error) {
        console.error("Get Users Error", error);
        res.status(500).json({message: 'Server error'});
    }
};

export {registerUser, loginUser, getUsers};