var express = require("express")
var router = express.Router()
var fixtures = require("../fixtures/fixtures")
var service = require("../utils/service")

router.post('/', (req, res) => {
  let body = req.body
  let displayType = body.displayType
  if(displayType != null) {
    if(displayType.toLowerCase() == "day") {
      res.json(service.getJsonResponse(fixtures.memberDay))
    } else if(displayType.toLowerCase() == "month") {
      res.json(service.getJsonResponse(fixtures.memberMonth))
    }
  }
  res.json({})
})

module.exports = router