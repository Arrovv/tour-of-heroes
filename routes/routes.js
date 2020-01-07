const {Router} = require('express')
const Hero = require('../models/Hero')
const router = Router()

// /api
router.get('/', async (req, res) => {
  try {
    const heroes = await Hero.find({})
    console.log(heroes)
    res.json(heroes)
  } catch (e) {
    res.status(500).json({message: 'Error...!'})
  }

})

router.get('/:id', async (req, res) => {
  try {
    const hero = await Hero.findById(req.params.id)
    console.log(hero)
    res.json(hero)
  } catch (e) {
    res.status(500).json({message: 'Error...!'})
  }
})

module.exports = router
