const mongoose = require('mongoose')

const field_Schema = new mongoose.Schema({
    field1:
    {
        type: String,
    },
    field2: {
        type: String,

    },
    field3: {
        type: String
    },
    field4: {
        type: String
    }
})

module.exports = mongoose.model('field', field_Schema, 'field')
