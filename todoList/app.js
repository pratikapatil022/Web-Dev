const express = require("express");
const bodyParser = require("body-parser");
const app = express()
let items = []
let workItems = []
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    // res.sendFile(__dirname + "index.html")
    let today = new Date()
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    let day = today.toLocaleDateString("eng-US", options)


    res.render("index.ejs", { listTitle: day, items: items })
})

app.get("/work", (req, res) => {
    res.render("index.ejs", { items: workItems, listTitle: "WORK LIST" })
})

app.post("/work", (req, res) => {
    item = (req.body.newInput);
    workItems.push(items)
    res.render("/work")
})

app.post("/", (req, res) => {
    item = (req.body.newInput);

    if (req.body.list === "WORK LIST") {
        workItems.push(item);
        res.redirect("/work")
    } else {
        items.push(item)
        res.redirect("/")
    }
    console.log(req.body)

})

app.listen(process.env.PORT || 3000, () => {
    console.log("This Server is on!!!")
})

