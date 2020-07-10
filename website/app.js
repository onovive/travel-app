
/* Global Variables */
let url = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '49064d0866731d4f7013e5f41cf8b2ef';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click',performAction);


function performAction(e) {
  const zip = document.getElementById('zip').value;
  const feelings = document.getElementById('feelings').value;

//Function called by event listener and get user input values

getData(url, zip, apiKey)

.then(function(data){
  // add data to POST request
postData('/add', {temperature: data.temp, date: newDate, input: feelings } )
})
.then(function (){
updateUI()
})
}

// GET method to store the data from api

const getData = async (url, zip, apiKey) => {
  const res = await fetch(url+zip+apiKey);
    try {
        const data = await res.json();
        return data;
    }
     catch (error) {
        console.log("error", error);
    }
  }


// POST method to Store the data from api
const postData = async ( url = '', data = {})=>{
      const res = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
   });
   try {
     const newData = await res.json();
     return newData;
   }catch(error) {
   console.log("error", error);
   }
 }

//update UI
  const updateUI = async () => {
    const request = await fetch('/all');
    try{
      const allData = await request.json();
      document.getElementById('content').innerHTML = allData.input;
      document.getElementById('date').innerHTML = allData.date;
      document.getElementById('temp').innerHTML = allData.temp;

    }catch(error){
      console.log("error", error);
    }
  }
