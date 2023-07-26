const router = require('express').Router();
const userRoutes = require('./api/userRoutes');
const thoughtRoutes = require('./api/thoughtRoutes');
const reactionRoutes = require('./api/reactionRoutes');
const friendRoutes = require('./api/friendRoutes');

router.use('/api/users', userRoutes);
router.use('/api/thoughts', thoughtRoutes);
router.use('/api/thoughts', reactionRoutes);
router.use('/api/users', friendRoutes);

router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;
