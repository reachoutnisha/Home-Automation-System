const router = require('express').Router();
const SmartDevice = require('./../../model/smart-device.model')

// to add the smart device

router.route('/')
    .post(async (req, res) => {
        try {
            const smartdevice = new SmartDevice(req.body);
            await smartdevice.save();
            res.status(201).send({
                message: "Device Installed",
                smartdevice
            })

        } catch (error) {
            console.log(error);
            res.status(400).send({
                message: "Some Error Occured"
            })
        }
    })

    // list of smart devices

    .get(async (req, res) => {
        try {
            const smartdevice = await SmartDevice.find({})
            res.status(200).send({
                message: "List of Smart Devices",
                smartdevice
            })
        } catch (error) {
            res.status(400).send({
                message: "Some Error Occured"
            })
        }

    })
// to get the smart device with given ID

router.route('/:id')
    .get(async (req, res) => {
        try {
            const id = req.params.id;
            const smartdevice = await SmartDevice.findById(id);
            if (!smartdevice) {
                return res.status(400).send({
                    message: 'No device found'
                })
            }
            res.status(200).send(smartdevice);
        } catch (error) {
            res.status(500).send({
                message: "Internal Server Error",
                error
            })
        }
    })

// to perform an operation
router.route('/:id')
    .put(async (req, res) => {
        try {
            const id = req.params.id;
            const smartdevice = await SmartDevice.findById(id);
            const properties = req.body;

            if (!smartdevice) {
                return res.status(404).send({
                    message: 'No device found'
                })
            }

            for(let property in properties) {
                if(!smartdevice.device_properties.hasOwnProperty(property)) {
                    return res.status(404).send({
                        message: 'Invalid Operation not allowed!'
                    });
                }
            }

            if (smartdevice.device_status === 'disconnected'){
                smartdevice.device_status = 'connected';
            }

            let d = Object.assign({}, smartdevice.device_properties, properties);

            smartdevice.device_properties = d;

            await smartdevice.save();
                
            res.status(200).send(smartdevice);

        } catch (error) {
            res.status(500).send({
                message: 'Internal Server Error'
            }, error)
        }
    })

// to update a smart device

router.route('/:id')
    .patch(async (req, res) => {
        try {
            const id = req.params.id;
            const smartdevice = await SmartDevice.findById(id);
            const updatesmartdevice = req.body;
            
            if (!smartdevice) {
                return res.status(404).send({
                    message: 'No device found'
                })
            }

            for(let property in updatesmartdevice) {
                if(!updatesmartdevice.hasOwnProperty(property)) {
                    return res.status(404).send({
                        message: 'Invalid Update'
                    });
                }
            }
            let d = await SmartDevice.findByIdAndUpdate(id, req.body, {new: true, runValidators: true})
            await smartdevice.save();
                
            res.status(200).send(smartdevice);

        } catch (error) {
            res.status(500).send({
                message: 'Internal Server Error'
            }, error)
        }
    })


// to remove a device

router.route('/:id')
    .delete(async (req, res) => {
        try {
            const id = req.params.id;
            const smartdevice = await SmartDevice.findByIdAndRemove(id)

            if (!smartdevice) {
                return res.status(400).send({
                    message: 'Some error occured'
                })
            }
            res.status(200).send({
                message: "Device Removed"
            })
        } catch (error) {
            res.status(500).send({
                message: "Server Error",
                error
            })
        }

    })


module.exports = router