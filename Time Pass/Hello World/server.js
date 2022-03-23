const express = require('express');
const PORT = 5000;
const app = express();

app.use(express.static(__dirname+"/public"));
app.get('/',(req,res)=>{
    res.send('Hello There');
})

app.listen(PORT, () => console.log("Server is listening at http://172.16.26.5:"+PORT))