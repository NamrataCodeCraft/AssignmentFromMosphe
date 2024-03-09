const users = require('../model/users')

// Route to update payment method
exports.settingPaymentMethod = async  (req, res) => {
    const { userId, paymentMethod } = req.body;

    // Find the user in the database
    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Update the user's payment method
    user.paymentMethod = paymentMethod;

    res.json({ message: 'Payment method updated successfully', user });
};

// Route to update personal info
exports.settingPersonalInfo = async (req, res) => {
    const { userId, firstName, lastName, email } = req.body;

    // Find the user in the database
    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Update the user's personal info
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;

    res.json({ message: 'Personal info updated successfully', user });
};