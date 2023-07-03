
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");


const app = express();

app.use(cors());
app.use(express.json()); // Add this line to parse JSON request bodies
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: "localhost",
    user : "root",
    password : "Sate@1234",
    database : "dashboard"
})


// Login endpoint
app.post("/login", (req, res) => {
    const q = "SELECT * FROM user WHERE username = ? AND password = ? ";
  
    connection.query(q, [req.body.username,req.body.password,req.body.date], (err, data) => {
      if(err)
      {
         return res.json({err : err})
      }
      if (data.length >0){
          return res.json({ message : "login successfully",data});
      } else{
          return res.json({ message :"Please enter valid username and password"});
  
      }
      
     
    });
  });


  // Endpoint to fetch data from the database
app.get('/api/formData', (req, res) => {
  const query = 'SELECT * FROM templatelist';

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(results);
    }
  });
});


// Endpoint to save form data to the database
app.post('/api/saveFormData', (req, res) => {
  const {
    ClientName,
    Technician,
    YardSize,
    SquareFt,
    PriceSqFt,
    TotalPrice,
    Date,
    Signature,
    Notes
  } = req.body;

  const query = 'INSERT INTO templateform (`Client Name`,`Technician`, `Yard Size`,`Squire Ft`, `Price Sq/Ft`, `Total Price`, `Date`,  `Signature`, `Notes`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';

  connection.query(query, [ClientName, Technician, YardSize, SquareFt, PriceSqFt, TotalPrice,  Date,  Signature, JSON.stringify(Notes)], (error, results) => {
    if (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json({ message: 'Form data saved successfully' });
    }
  });
});

// Endpoint to fetch form data from the database
app.get('/api/previewFormData', (req, res) => {
  const query = 'SELECT * FROM templateform';

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(results);
    }
  });
});


 
app.listen(3001,() =>{
    console.log("server running");
})




