const router = require('express').Router();
const userRoutes = require('./api/userRoutes');
const eventRoutes = require('./api/eventRoutes');
const productRoutes = require('./api/productRoutes');
const stallRoutes = require('./api/stallRoutes');

router.use('/api/users', userRoutes);
router.use('/api/events', eventRoutes);
router.use('/api/products', productRoutes);
router.use('/api/stalls', stallRoutes);

router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;
