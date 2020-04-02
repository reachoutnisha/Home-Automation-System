let deviceDefaultConfig = {
    television: {
        initialConfig: {
            
           volume: 20,
           brightness: 50,
           "turn-on": false

        }
    },
    refrigerator: {
        initialConfig: {
           temperature: 70,
           "turn-on": false

        }
    },
    camera: {
        initialConfig: {
            "turn-on": false
         }
    },
    smartphone: {
        initialConfig: {
            "turn-on": false,
            brightness : 10,
            "lock-status" : false
         }
    },
    aircondition: {
        initialConfig: {
            "turn-on": false
         }
    },
    speaker: {
        initialConfig: {
            "turn-on": false,
            volume : 30   
         }
    }
}

module.exports = deviceDefaultConfig;