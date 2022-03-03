const express = require('express');

const app = express();

app.use(express.urlencoded({extended: true}))


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/', (req, res) => {
    console.log("Name:"+ req.body.fn + " " + req.body.ln);
    console.log("Gender: "+ req.body.sex);
    console.log("Email: "+ req.body.email);
    console.log("Phone: "+ req.body.phone);
    console.log("Marital Status: "+ req.body.status);
    console.log("Blood Group: "+ req.body.blood);
    console.log("Genotype: "+ req.body.type);
    console.log("Address: "+ req.body.address);
    console.log("Date Register: "+ req.body.date);
    res.send("Data has been Successfully Captured")
})

app.get('/movie', (req, res) => {
    res.sendFile(__dirname + "/movie.html")
})

app.post('/movie', (req, res) => {
    console.log("Title: "+ req.body.ti);
    console.log("Producer: "+ req.body.pro);
    console.log("Director: "+ req.body.dir);
    console.log("Writer: "+ req.body.wri);
    console.log("Genre: "+ req.body.genre);
    console.log("Review: "+ req.body.review);
    console.log("Year Release: "+ req.body.date);
    res.send("Data has been Successfully Captured")
})

app.get('/property', (req, res) => {
    res.sendFile(__dirname + "/property.html")
})

app.post('/property', (req, res) => {
    console.log("Name:"+ req.body.fn + " " + req.body.ln);
    console.log("Gender: "+ req.body.sex);
    console.log("Email: "+ req.body.email);
    console.log("Phone: "+ req.body.phone);
    console.log("Marital Status: "+ req.body.status);
    console.log("Location: "+ req.body.location);
    console.log("Budget: "+ req.body.budget);
    console.log("Address: "+ req.body.address);
    console.log("Questions: "+ req.body.questions);
    console.log("Date Register: "+ req.body.date);
    res.send("Data has been Successfully Captured")
})



app.listen(3000, () => {
    console.log("Server Started on Port 3000")
})