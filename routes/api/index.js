const router = require('express').Router();
const userRoutes = require('./user-routes');
// const thoughtsRoutes = require('./');

router.use('/users', userRoutes);
// router.use('/thoughts', thoughtsRoutes);

module.exports = router;