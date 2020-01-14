const {Schema, model, ObjectId} = require('mongoose')

const schema = new Schema({
  _id: {type: ObjectId},
  name: {type: String},
  age: {type: Number},
  class: {type: String},
  statistics: {type: Number},
  HP: {type: Number},
  MP: {type: Number},
  head: {
    type:{Object},
    lvl: {type: Number},
    item_class:  {type: String},
    img:  {type: String}
  },
  body: {
    type:{Object},
    lvl: {type: Number},
    item_class:  {type: String},
    img:  {type: String}
  },
  weapon: {
    type:{Object},
    lvl: {type: Number},
    item_class:  {type: String},
    img:  {type: String}
  },
  legs: {
    type:{Object},
    lvl: {type: Number},
    item_class:  {type: String},
    img:  {type: String}
  },
  hands: {
    type:{Object},
    lvl: {type: Number},
    item_class:  {type: String},
    img:  {type: String}
  },
  boots: {
    type:{Object},
    lvl: {type: Number},
    item_class:  {type: String},
    img:  {type: String}
  }
})

module.exports = model('Hero', schema, 'Hero')
