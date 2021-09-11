const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    host : 'smtp.gmail.com',
    port : 587,
    secure : false    
    
})

var mailOptions={
    from:'paisahunter2000@gmail.com',
    to:'anuveshsahu6@gmail.com',
    subject:"NodeMailer Testing",
    text:"If this email rechead to you then the nodemailer is runnning,Congratulations!!"

}
transporter.sendMail(mailOptions,function(error,info) {
    if(error){
        console.log("There is some error while sending the mail!");
    }else{
        console.log("Test Passed");
    }
})