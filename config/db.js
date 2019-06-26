const mongoose = require('mongoose')

// Map global promises
mongoose.Promise = global.Promise
// Mongoose Connect
mongoose.connect('mongodb+srv://paradox:Hackking_0810@cluster0-6m592.mongodb.net/test?retryWrites=true&w=majority')
                .then(()=>{ console.log('Mongoose Connected') })
                .catch(err => console.error(err))