const {Schema, model, ObjectId} = require('mongoose')

const schema = new Schema({
  _id: {type: ObjectId},
  name: {type: String},
  age: {type: Number}
})

module.exports = model('Hero', schema, 'Heroes')
