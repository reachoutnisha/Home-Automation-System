const mongoose = require('mongoose');

const smartDeviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    company_name : {
        type : String,
        required : true
    },
    model_no : {
        type : String,
        required : true
    },
    description : {
        type : String
    },
    device_type : {
        type : String,
        enum : ['television', 'refrigerator', 'aircondition', 'smartphone',
    'camera']
    },
    device_status: {
        type: String,
        enum : ['connected', 'disconnected'],
        default : 'disconnected',
    },
    device_properties : {
        type : Object,
        required : true
    },
    device_features : {
        type : Object,
        required : true
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