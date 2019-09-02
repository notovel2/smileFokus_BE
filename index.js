var express = require("express")
var app = express()
var revenueRoute = require("./app/router/revenueRoute")
var memberRoute = require("./app/router/memberRoute")
app.use(express.urlencoded())
app.use(express.json())
app.use('/revenue', revenueRoute)
app.use('/member', memberRoute)
var PORT = process.env.PORT || 3000
app.listen(PORT)