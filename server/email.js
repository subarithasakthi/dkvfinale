var express = require("express");
var http = require("http")
var path = require("path")
var nodemailer = require("nodemailer");


var app = express()
var server = http.Server(app)
var port = 7000

app.set("port", port)
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname, "client")))

//Routing
app.get("/", function(req, response){
    response.sendFile(path.join(__dirname, "Aboutus.html"))
})



app.post("/send_email", function(req, response){

    const output=`
  <p>You have a new contact request</p>
  <h3>Contact details</h3>
  <ul>
  <li>Name: ${req.body.name}</li>
  <li>Mobile Number: ${req.body.Phone_no}</li>
  <li>Email: ${req.body.from}</li>
  <li>Message: ${req.body.message}</li>
  </ul>`


  
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'subaritha.profenaa@gmail.com',
          pass: 'tpuklrrzmsezvibb'
        }
    })

    var mailOptions = {
        to:"subaritha.profenaa@gmail.com",
        subject: req.body.subject,
        html:output
            }

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error)
        } else {
            console.log("Email Sent: " + info.response)
        }
        response.redirect("/")
    })
})

//Initialize Web Server
server.listen(port, function(){
    console.log("starting server on port " + port)
})
console.clear()