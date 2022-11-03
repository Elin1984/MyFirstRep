const mongoose = require("mongoose")

const MINIMUM_AGE = 10
const MAXIMUM_AGE = 120

const authorSchema = new mongoose.Schema({
    firstName: { type: String, required: [true, 'First name is required'] },
    lastName: { type: String, required: [true, 'Last name is required'] },
    age: { 
        type: Number, 
        required: [true, 'Age is required'], 
        min: [MINIMUM_AGE, `Minimum age is ${MINIMUM_AGE}, got {VALUE}`], 
        max: [MAXIMUM_AGE, `Maximum age is ${MAXIMUM_AGE}, got {VALUE}`]
    }
})

module.exports = mongoose.model('Author', authorSchema)