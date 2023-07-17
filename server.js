// importing packages
const express = require('express');
const path = require('path');

// using express as our application to run and send our data
// intailizing express.js
const app = express();
const port = process.env.PORT || 5050;

// specifying the json and url enconded
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// specifying the file path
app.use(express.static(path.join(__dirname, "Html templates")));

// routes 

// the contact page post request
app.post('/contact.page', (req, res) => {

  // creating an object to validate the form data
  const formData = {
    Name: req.body.name,
    Email: req.body.email,
    Message: req.body.message
  };

  res.json(formData);
});


// the post request of the certificate application form data
app.post('/certificate.application.page', (req, res) => {

  const data = {
    name: req.body.name,
    address: req.body.address,
    gender: req.body.gender,
    nationality: req.body.nationality,
    state: req.body.state,
    occupation: req.body.occupation,
    certificate: req.body.certificate,
    number: req.body.number,
    email: req.body.email,
    terms: req.body.terms
  }

  res.json(data);
})


app.post('/job.application.page', (req, res) => {
  
  const data = {
    name: req.body.name,
    address: req.body.address,
    gender: req.body.gender,
    DOB: req.body.DOB,
    nationality: req.body.nationality,
    state: req.body.state, 
    number: req.body.number,
    email: req.body.email,
    certificate: req.body.certificate,
    CV: req.body.CV,
    terms: req.body.terms
  }
  
  res.json(data);
})

app.post('/training.course.application.page', (req, res) => {
  
  const data = {
    name: req.body.name,
    address: req.body.address,
    gender: req.body.gender,
    DOB: req.body.DOB,
    nationality: req.body.nationality,
    state: req.body.state, 
    course: req.body.course,
    number: req.body.number,
    email: req.body.email,
    terms: req.body.terms
  }
  
  res.json(data);
})


// local port is been used here, so change to production port
app.listen(port, console.log(`listening on port ${port}`));
