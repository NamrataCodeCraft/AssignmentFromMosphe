const User = require('../model/users')
exports.startTrail = async (req, res) => {
    const { userId, trialDays } = req.body;

    // Find the user in the database
    const user =await User.findOne({_id: userId});

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    if (user.trialStartDate) {
        return res.status(400).json({ message: 'User trial already started' });
    }

    const currentDate = moment();
    user.trialStartDate = currentDate.format();
    user.trialEndDate = currentDate.add(trialDays, 'days').format();

    res.json({ message: 'Trial started successfully', trialEndDate: user.trialEndDate });
};



exports.trailStatus = async (req, res) => {
    const userId = req.params.userId;

    // Find the user in the database
    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    if (!user.trialStartDate) {
        return res.json({ message: 'User trial not started', isTrial: false });
    }

    const currentDate = moment();
    const trialEndDate = moment(user.trialEndDate);
    const daysRemaining = trialEndDate.diff(currentDate, 'days');

    if (daysRemaining > 0) {
        return res.json({ message: 'User trial in progress', daysRemaining });
    } else {
        return res.json({ message: 'User trial expired', isTrialExpired: true });
    }
};