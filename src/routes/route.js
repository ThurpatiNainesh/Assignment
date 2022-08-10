const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weatherController = require("../controllers/weatherController")
const memesController = require("../controllers/memesController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

router.post("/memesHandler", memesController.memesHandler)

router.get("/getweather",weatherController.sortCityTemp)

router.get("/cowin/getByDistId",CowinController.getByDistId)

module.exports = router;