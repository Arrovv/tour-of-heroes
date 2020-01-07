const {Schema, model, ObjectId} = require('mongoose')

const schema = new Schema({
  _id: {type: ObjectId},
  name: {type: String},
  age: {type: Number},
  class: {type: String},
  statistics: {type: Number},
  HP: {type: Number},
  MP: {type: Number}
})

module.exports = model('Heros', schema, 'Heros')
