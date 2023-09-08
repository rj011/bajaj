const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3000;
app.use(bodyParser.json())
app.post('/bfhl', (req,res) =>{
    try{
    const { firstname,lastname,dob, collegeEmail, collegeRoll, data} = req.body;
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const userId = firstname+"_"+lastname+"_"+dob;
  
  const highestAlphabet = alphabets.reduce((max, current) => {
    return current > max ? current : max;

    
  });

  const response = {
    is_success: true,
    user_id: userId,
    email: collegeEmail,
    roll_number: collegeRoll,
    numbers,
    alphabets,
    highest_alphabet: [highestAlphabet],
  };

  res.json(response);}
  catch(error) {
    console.log("Error", error.message);
    res.status(500).json({error: "Sonething has gone wrong"})
  }
})

app.get('/bfhl', (req,res) =>{
    try{
    res.json({"operation_code": 1})}
    catch(err) {
        res.status(500).json({error: err})
    }
})

app.listen(PORT, (error)=> {
    if(error)
    console.log(error);
else{
    console.log("Server running")
}
})