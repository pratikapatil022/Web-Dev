var express = require("express")
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))
var friends = ["Pratik", "Ashish", "Mohit", "Simon"]

app.get("/", function (req, res) {
    res.render("index.ejs");
})

app.get("/friends", function (req, res) {
    res.render("friends.ejs", { friends: friends })
})

app.post("/addFriend", function (req, res) {
    var newFriend = req.body.newFriend
    friends.push(newFriend)
    console.log(req.body)
    res.redirect("/friends");
})

app.listen(3000, function () {
    console.log("The Server Is On!!!")
})