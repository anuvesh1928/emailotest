const express = require('express');
const fs = require('fs');
const nodemailer = require('nodemailer')
const app = express();
const PORT =  80;

app.use(express.static('assets'));
app.use(express.urlencoded())


app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/assets/index.html')
});
app.post('/', (req, res)=>{
    // res.sendFile(__dirname + '/assets/index.html')
   name = req.body.name
   more = req.body.more
   email = req.body.email
    // console.log(req.body);
    // res.sendFile()
    const transporter = nodemailer.createTransport({
        host : 'smtp.gmail.com',
        port : 587,
        secure : false,
        requireTLS:true,
        auth:
        {
            user:'anuveshsahu6@gmail.com',
            pass:'anu@2011'
        }
    })
   
var mailOptions={
    from:`${email}`,
    to:'anuveshsahu6@gmail.com',
    subject:`Email from ${email}`,
    text: `name: ${name} email: ${email} more:${more}`

}
  

transporter.sendMail(mailOptions,function(error,info) {
    if(error){
        console.log("There is some error while sending the mail!");
    }else{
        console.log("Test Passed");
    }
})


    
})
app.listen(PORT,()=>{
    console.log("Server Ran!!");
})
