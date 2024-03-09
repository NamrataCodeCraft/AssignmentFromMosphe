const router = require('express').Router();
const { signup, login } = require('../controllers/users');
const { createpayment } = require('../controllers/payment')
const { startTrail, trailStatus } = require('../controllers/trial')
const { dashboard } = require('../controllers/dashboard')
const {settingPaymentMethod , settingPersonalInfo} = require('../controllers/setting')



router.post('/signup', signup)
router.post('/login', login)
router.post('/create-payment-intent', createpayment)
router.post('/start-trial', startTrail)
router.post('/trial-status/:userId', trailStatus)
router.get('/dashboard', dashboard)
router.get('/settings/payment-method', settingPaymentMethod)
router.get('/settings/personal-info', settingPersonalInfo)








module.exports = router

