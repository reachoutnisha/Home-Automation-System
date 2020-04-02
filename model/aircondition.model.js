const mongoose = require('mongoose');

const airconditionSchema = new mongoose.Schema({
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
    operations : [{
        name : {
            type : String,
            enum: ['turn-on', 'turn-off', 'change']
        },
        description : {
            type : String
        },
        status: {
            type: String,
            enum: ['enabled', 'disabled']
        }
    }],
    device_properties : {
        type : [{
            name: {
                type: String,
                required : true,
                enum : ['temperature']
            },
            value: {
                type: Number,
                required : true
            },
            unit: {
                type : String
            }
        }]
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

const AirCondition = mongoose.model('aircondition', airconditionSchema)

module.exports = AirCondition;