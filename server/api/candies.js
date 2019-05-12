const router = require('express').Router()

const Candy = require('../db/models/Candy')


router.get('/', async (req, res) => {
  try{
    const response = await Candy.findAll()
    res.send(response)
  }
  catch(err){
    console.log(err, "oops something went wrong")
  }
})


module.exports = router
