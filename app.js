const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use('/api',require('./routes/routes'))

const PORT = config.get('port') || 5000

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()
// const HeroesSchema = new Schema({
//   id: {type: Number},
//   name: {type: String},
//   age: {type: Number},
//   class: {type: String},
//   statistics: {type: Number},
//   HP: {type: Number},
//   MP: {type: Number},
// })

// const ImplementsSchema = new Schema({
//   head_lvl: {type: Number},
//   head_item_class: {type: String},
//   head_img: {type: String},
//   body_lvl: {type: Number},
//   body_item_class: {type: String},
//   body_img: {type: String},
//   weapon_lvl: {type: Number},
//   weapon_item_class: {type: String},
//   weapon_img: {type: String},
//   legs_lvl: {type: Number},
//   legs_item_class: {type: String},
//   legs_img: {type: String},
//   hands_lvl: {type: Number},
//   hands_item_class: {type: String},
//   hands_img: {type: String},
//   boots_lvl: {type: Number},
//   boots_item_class: {type: String},
//   boots_img: {type: String}
// });

