const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thoughtt-routes');

router.use('/User', userRoutes);
router.use('/Thoughts', thoughtRoutes);

module.exports = router;
