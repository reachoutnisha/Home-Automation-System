const mongoose = require('mongoose');

const smartDeviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    device_status: {
        type: String,
        enum : ['connected', 'disconnected'],
        default : 'disconnected',
        required : true
    },
    device_properties : {
        type: Object
    },
    config_status: {
        type: String
    },
    mac_address: {
        type: String
    },
    ip_address: {
        type: String
    },
    description: {
        type: String,
    }
})

const SmartDevice = mongoose.model('smartdevice', smartDeviceSchema)

module.exports = SmartDevice;