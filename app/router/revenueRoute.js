var express = require("express")
var router = express.Router()
var fixtures = require("../fixtures/fixtures")
var service = require("../utils/service")

router.post('/', (req, res) => {
  let body = req.body
  if(body.displayType != null) {
    if(body.displayType.toLowerCase() == "day") {
      res.json(service.getJsonResponse(fixtures.revenueDay))
    } else if(body.displayType.toLowerCase() == "month") {
      res.json(service.getJsonResponse(fixtures.revenueMonth))
    }
  }
  res.json({})
})

module.exports = router