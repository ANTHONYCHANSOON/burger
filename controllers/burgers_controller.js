var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsobject = {
            burgers: data
        };
        console.log(hbsobject);
        res.render("index", hbsobject);
    });
});
//add
router.post("/api/burgers", function(req, res) {
    console.log(req.body.burger_name);
    burger.create(req.body.burger_name, function (results) {
        res.json({ id: results.insertID});
    })
})
//update
module.exports = router;