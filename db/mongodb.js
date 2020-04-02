var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/devices', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('Database connected successfully');
}).catch((err) => {
    console.log('Error in connecting Database', err);
})