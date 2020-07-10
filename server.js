// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes

const express = require('express');


// Start up an instance of app
const app = express()
/* Middleware*/

/* dependencies*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors())
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

const server = app.listen(3030, () => {
  console.log('server is listening on port:', 3030)
})

// GET method route

app.get('/all, getData)

function getData(req,res){
  res.send(projectData);
}




// POST route adds data to ProjectData
app.post('/addWeatherData', addData)

function addData (request, response) {
    projectData.temp = request.body.temp;
    projectData.date = request.body.date;
    projectData.input = request.body.input;
    response.end();
    console.log(projectData)
}
