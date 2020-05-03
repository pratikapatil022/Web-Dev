var express = require("express");
var app = express();

app.use(express.static("public"))

app.get("/index/:name", function (req, res) {
    var name = req.params.name
    res.render("index.ejs", { cool: name })
})

app.get("/message/:message/:times", function (req, res) {
    var message = req.params.message
    var times = Number(req.params.times)
    res.render("message.ejs", { cool: message, times: times })
})

app.get("/", function (req, res) {
    res.render("index.ejs")

})

app.listen(3000, function () {
    console.log("The Server Is On!!!")
})