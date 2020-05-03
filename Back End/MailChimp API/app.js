const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const https = require("https")
app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }))


app.post("/", (req, res) => {
    const first_name = req.body.firstname
    const last_name = req.body.lastname
    const email_id = req.body.email
    console.log(first_name, last_name, email_id);

    const data = {
        members: [
            {
                email_adress: email_id,
                status: "subscribed",
                LNAME: last_name,
                FNAME: first_name
            }
        ]
    }
    const url = "https://usx.api.mailchimp.com/3.0/lists/"
    const jsonData = JSON.stringify(data);
    const options = {
        method: "POST",
        auth: "pratik:"
    }

    const request = https.request(url, options, function (response) {
        response.on("data", function (data) {
            console.log(JSON.parse(data))
        })

    })

    request.write(jsonData);
    request.end();


})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(3000, () => {
    console.log("This Server Is On Bitches!!!!")
})
