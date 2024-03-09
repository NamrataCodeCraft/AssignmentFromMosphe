const User= require('../model/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// Sign up endpoint
exports.signup = async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log('req.body', req.body)
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create(
            {
                username:username,
                password: hashedPassword
            }
        );

        res.status(201).json({ message: 'User created successfully' , user});
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Log in endpoint
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        const token = jwt.sign({ username: user.username }, 'secretKey');
        res.json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

