const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const CORS = require('cors');
const PORT = config.get('port');
const app = express();

app.use('/api/heroes', CORS(), require('./routes/routes'))

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true
    })
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()



