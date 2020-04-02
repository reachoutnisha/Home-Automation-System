const router = require('express').Router();
const deviceRoutes = require('./router/device/device.route');
 
router.use('/device', deviceRoutes);
// router.use('/television', deviceRoutes);
// router.use('/refrigerator', deviceRoutes);
// router.use('/aircondition', deviceRoutes);
 
module.exports = router;