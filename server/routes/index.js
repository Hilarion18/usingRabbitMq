const router = require('express').Router();
const merchantRoutes = require('./merchantRoutes')
const userRoutes = require('./userRoutes');

router.use('/user', userRoutes);
router.use('/merchant', merchantRoutes)

// To use in app.js
module.exports = router;
