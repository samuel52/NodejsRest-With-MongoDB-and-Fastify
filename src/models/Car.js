//External dependacies

const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
	title: String,
	brand: String,
	proce: String,
	age: Number,
	service: {
		type: Map,
		of: String
	}
})

module.exports = mongoose.model('Car', carSchema)