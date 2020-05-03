const express = require("express");
const https = require("https");
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.post("/addLocation", function (req, res) {
    const cityName = req.body.location
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=adf4e9446cbce24145e9c6bad30c98ea&units=metric"

    https.get(url, function (response) {
        response.on("data", function (data) {
            const json = JSON.parse(data)
            const temp = json.main.temp
            const description = json.weather[0].description
            const icon = json.weather[0].icon
            res.write(`<p>Just wanted to use the back of this occasion here is the description:${description}</p>`)
            res.write(`<p>The Temperature in London is: ${temp} degrees celsius</p>`)

            res.send();

        })
    })

})

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.listen(3000, function () {
    console.log("server is running");
})


