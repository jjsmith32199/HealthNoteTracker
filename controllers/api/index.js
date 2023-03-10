const router = require('express').Router();
const symptomRoutes = require('./symptomRoutes');
/* const doctorRoutes = require('./doctorRoutes');
const tagRoutes = require('./tagRoutes'); */
//const trackerRoutes = require('./trackerRoutes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
/* router.use('/doctors', doctorRoutes); */
router.use('/symptoms', symptomRoutes);
/* router.use('/tags', tagRoutes); */
//router.use('/tracker', trackerRoutes);

module.exports = router;
