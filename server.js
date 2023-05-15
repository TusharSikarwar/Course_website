// const { Console } = require('console');
const fs = require('fs');
const http = require('http');
const path = require('path');
const express = require('express')
const mysql = require('mysql');
// const { redirect, retry } = require('statuses');
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt');
// const { rejects } = require('assert');
// const doctopdf = require('docx-pdf');
// const { func } = require('assert-plus');
// const { reject } = require('bluebird');


// fs http path express mysql body-parser bcrypt nodemailer passport passport-google-oauth2 express-session cookie-parser multer assert-plus statuses

const nodemailer = require('nodemailer');
const passport = require('passport')
const googleStrategy = require('passport-google-oauth2').Strategy
const session = require('express-session')
const cookieParser = require('cookie-parser')
const multer = require('multer');
const { func } = require('assert-plus');
const { redirect } = require('statuses');
// const docxConverter = require('docx-pdf');
// const request = require("request");
// const libre = require('libreoffice-convert')
// const fileUpload = require('express-fileupload')
// const { PDFNet } = require('@pdftron/pdfnet-node');
// import WebViewer from 'node_modules/@pdftron/webviewer'
// const axios = require('axios')


const hostname = '127.0.0.1';
const port = 8080;
const app = express();
const saltRounds = 10;
app.use(bodyParser.json()); // support parsing of application/json type post data
app.use(bodyParser.urlencoded({ extended: true })); //support parsing of application/x-www-form-urlencoded post data
app.use(express.urlencoded({extended : false}))
// libre.convertAsync = require('util').promisify(libre.convert);
const upload = multer({ dest: 'currentFile' })
app.use('/assets', express.static('assets'));
app.use('/Doc',express.static('Doc'));
app.use(cookieParser())
app.use(session({
    secret: 'Zxcv,1234',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false }
}))
passport.serializeUser(function(user,done){done(null,user)})
passport.deserializeUser(function(user,done){done(null,user)})
const emailTempPrv = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<!--[if gte mso 9]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
</xml>
<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
  <title></title>
  
    <style type="text/css">
      @media only screen and (min-width: 620px) {
  .u-row {
    width: 600px !important;
  }
  .u-row .u-col {
    vertical-align: top;
  }

  .u-row .u-col-100 {
    width: 600px !important;
  }

}

@media (max-width: 620px) {
  .u-row-container {
    max-width: 100% !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .u-row .u-col {
    min-width: 320px !important;
    max-width: 100% !important;
    display: block !important;
  }
  .u-row {
    width: 100% !important;
  }
  .u-col {
    width: 100% !important;
  }
  .u-col > div {
    margin: 0 auto;
  }
}
body {
  margin: 0;
  padding: 0;
}

table,
tr,
td {
  vertical-align: top;
  border-collapse: collapse;
}

p {
  margin: 0;
}

.ie-container table,
.mso-container table {
  table-layout: fixed;
}

* {
  line-height: inherit;
}

a[x-apple-data-detectors='true'] {
  color: inherit !important;
  text-decoration: none !important;
}

table, td { color: #000000; } #u_body a { color: #fdc71b; text-decoration: underline; } @media (max-width: 480px) { #u_content_text_1 .v-container-padding-padding { padding: 40px 10px 10px !important; } #u_content_text_2 .v-container-padding-padding { padding: 8px 10px 40px !important; } }
    </style>
  
  

<!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->

</head>

<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
  <!--[if IE]><div class="ie-container"><![endif]-->
  <!--[if mso]><div class="mso-container"><![endif]-->
  <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0">
  <tbody>
  <tr style="vertical-align: top">
    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ffffff;"><![endif]-->
    

<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #fbfbfb;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #fbfbfb;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
  <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table id="u_content_text_1" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:50px 35px 10px 40px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="color: #000000; line-height: 180%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 180%;"><span style="font-size: 18px; line-height: 32.4px; color: #000000;"><strong><span style="line-height: 32.4px; font-family: Montserrat, sans-serif; font-size: 18px;">Dear User,</span></strong></span></p>
<p style="font-size: 14px; line-height: 180%;"><br /><span style="font-size: 16px; line-height: 28.8px; font-family: Montserrat, sans-serif;">Your email verification link :- </span></p>

`;
const emaiTempSucc = ` 
</div>

    </td>
  </tr>
</tbody>
</table>

<table id="u_content_text_2" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
<tbody>
  <tr>
    <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:8px 35px 40px 40px;font-family:arial,helvetica,sans-serif;" align="left">
      
<div style="color: #000000; line-height: 180%; text-align: left; word-wrap: break-word;">
  <p style="line-height: 180%; font-size: 14px;"><span style="font-family: Montserrat, sans-serif; font-size: 16px; line-height: 28.8px;">If you have any questions, please feel free to contact admin directly.</span></p>
<p style="line-height: 180%;"><span style="font-family: Montserrat, sans-serif; line-height: 25.2px;"><span style="font-size: 16px; line-height: 28.8px;">Email :- nam.chawlaa@gmial.com</span></span></p>
</div>

    </td>
  </tr>
</tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
<tbody>
  <tr>
    <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:arial,helvetica,sans-serif;" align="left">
    </td>
  </tr>
</tbody>
</table>

<!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
  </div>
</div>
</div>


  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  </td>
</tr>
</tbody>
</table>
<!--[if mso]></div><![endif]-->
<!--[if IE]></div><![endif]-->
</body>

</html>
`
let checkPassKey = {members:{}}


mysqlPool =  mysql.createPool({
    host : 'localhost',
    user : 'root',
    password: 'Pranab@34',
    port : 3306,
    connectionLimit: 10,
    database: 'registration',
    multipleStatements: true
});







app.get('/',function(req,res){
    console.log(req.url);
    if(req.session.user == undefined){
        res.sendFile(path.join(__dirname,'index.html'));
    }else{
        res.redirect('/index?login=0')
    }
});

app.get('/index',function(req,res){
    console.log(req.url);
    res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/about',function(req,res){
    console.log(req.url);
    res.sendFile(path.join(__dirname,'about.html'));
})

app.get('/courses',function(req,res){
    console.log(req.url);
    if(req.session.user == undefined){
        res.sendFile(path.join(__dirname,'courses.html'));
    }else{
        res.redirect('/course?login=0')
    }
})
app.get('/course',function(req,res){
    console.log(req.url);
    res.sendFile(path.join(__dirname,'courses.html'));
})

app.get('/course',function(req,res){
    console.log(req.url);
    res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/courseRender',function(req,res){
    res.sendFile(path.join(__dirname,'courseRender.html'))
})

app.post('/adminMes',function(req,res){
    console.log(req.url);
    // console.log(req.body);

    new Promise((resolve,reject)=>{
        mysqlPool.getConnection(function(err,mysqlConnect){
            if(err){console.log(err); reject([false,err])}
            else{
                mysqlPool.query(`INSERT INTO messages (email, name, message) VALUES ('${req.body.email}', '${req.body.name}', '${req.body.message}');`, function(err, rows){
                    if(err){reject([false,err]);}
                    else {resolve([true,rows]);}
                });
            }
            mysqlConnect.release();
        })
    }).then((val)=>{
        res.send('Got the message')
    },(err)=>{
        res.send('Error while connecting to Database !'); 
    })
})

app.get('/login',function(req,res){
    console.log(req.url);
    if(req.session.user != undefined){
        res.redirect(`./adminFileInput?username=${req.session.user.name}`);
    }else{

        res.sendFile(path.join(__dirname,'login.html'));
    }
})
app.post('/login',function(req,res){
    console.log(req.url);

    mysqlPool.getConnection(function(err,mysqlConnect){
        if(err){
            console.log(err);
            res.redirect(`/login?passincorrect=1&alert=Problem in Database connection. Try after some time !`);
        }
        else{
            mysqlPool.query(`SELECT * FROM register WHERE email='${req.body.email}'`, function(err, rows){
                if(err){console.log('in err :- ',err);}
                else {
                    // console.log('in rows :- ',rows[0].password);
                    new Promise((resolve,reject)=>{

                        bcrypt.compare(req.body.password, rows[0].password, function(err, result) {
                            if (result) {
                                // password is valid
                                resolve([true,result]);
                            }else{
                                reject([false,false]);
                            }
                            
                        });
                    }).then((val)=>{

                        new Promise((resolve,reject)=>{
                            mysqlPool.getConnection(function(err,mysqlConnect){
                                if(err){console.log(err); reject([false,err])}
                                else{
                                    mysqlPool.query(`SELECT name FROM register WHERE email='${req.body.email}'`, function(err, rows){
                                    // mysqlPool.query(`SELECT password FROM register WHERE email='asdf@gmail.com'`, function(err, rows){
                                        // console.log("in query")
                                        if(err){reject([false,err]);}
                                        else {resolve([true,rows]);}
                                    });
                                }
                                mysqlConnect.release();
                            })
                        }).then((val)=>{
                            
                            req.session.user = {name:val[1][0].name,email:req.body.email};
                            req.session.save();
                            setTimeout(()=>{
                                req.session.destroy();
                            },86400000);
                            // console.log("in login :- ",req.session.user);
                            // console.log(req.session.id);
                            res.redirect(`./adminFileInput?username=${req.session.user.name}`)
                        },(err)=>{
                            res.redirect(`/login?passincorrect=1&alert=Error while fetching Username. Try again !`);
                        })

                    },(err)=>{
                        res.redirect(`/login?passincorrect=1&alert=Password doesnot match !`);
                    })
                }
            });
        }
        mysqlConnect.release();
    })

    // res.sendFile(path.join(__dirname,'login.html'));
})


app.get('/passRecovery',function(req,res){
    console.log(req.url);
    console.log('checkPassKey :- ',checkPassKey);
    res.sendFile(path.join(__dirname,'passRecovery.html'));
})
app.post('/passRecovery',function(req,res){
    console.log(req.url);
    
    if(req.body.submit != 'Get Recovery Mail'){   
        if(req.body.password != req.body.confirmPassword){
            res.redirect(`/passRecovery?passKey=${req.body.passKey}&email=${req.body.email}&passwordRec=0&passincorrect=1&alert=Password doesnot match !`);
            
        }
        else if(Number(req.body.password.length) <= 5){
            res.redirect(`/passRecovery?passKey=${req.body.passKey}&email=${req.body.email}&passwordRec=0&passincorrect=1&alert=Password length should be more than 5 character !`);
        }
        else if((checkPassKey.members[req.body.passKey]) != req.body.email){
            
            res.redirect(`/passRecovery?passincorrect=1&alert=Email not Found for append process. Enter the email and try again !`);
            
        }else if((checkPassKey.members[req.body.passKey]) = req.body.email){
            
            new Promise((resolve,reject)=>{
                mysqlPool.getConnection(function(err,mysqlConnect){
                    if(err){console.log(err); reject([false,err])}
                    else{
                        mysqlPool.query(`SELECT password FROM register WHERE email='${req.body.email}'`, function(err, rows){
                        // mysqlPool.query(`SELECT password FROM register WHERE email='asdf@gmail.com'`, function(err, rows){
                            console.log("in query")
                            if(err){reject([false,err]);}
                            else {resolve([true,rows]);}
                        });
                    }
                    mysqlConnect.release();
                })
            }).then((val)=>{
                if(val[1][0].password.length <= 4){
                    res.redirect(`/register?passincorrect=1&alert=Email not found. Register first !`);
                }else{

                    new Promise((resolve,reject)=>{
                        bcrypt.genSalt(saltRounds, function(err, salt) {
                            if(err){reject([false,err]);}
                            bcrypt.hash(req.body.password, salt, function(err, hash){
                                // Store hash in your password DB.
                                if(err){
                                    reject([false,err]);
                                }else{
                                    // console.log("in bcrypt :- ", hash);
                                    resolve([false,hash]);
                                } 
                            });
                        })
                    }).then((val)=>{

                        new Promise((resolve,reject)=>{
                            mysqlPool.getConnection(function(err,mysqlConnect){
                                if(err){console.log(err); reject([false,err])}
                                else{
                                    mysqlPool.query(`UPDATE register SET password='${val[1]}' WHERE email='${req.body.email}' `, function(err, rows){
                                    // mysqlPool.query(`SELECT password FROM register WHERE email='asdf@gmail.com'`, function(err, rows){
                                        console.log("in query")
                                        if(err){reject([false,err]);}
                                        else {resolve([true,rows]);}
                                    });
                                }
                                mysqlConnect.release();
                            })
                        }).then((val)=>{
                            delete checkPassKey.members[req.body.passKey]
                            res.redirect(`/login?passincorrect=1&alert=Password changed !`);

                            console.log('val :- ',val)
                        },(err)=>{
                            res.redirect(`/passRecovery?passKey=${req.body.passKey}&email=${req.body.email}&passwordRec=0&passincorrect=1&alert=Some error came up. Try again !`);
                            console.log('err :- ',err)

                        })


                        
                    },(err)=>{
                        res.redirect(`/passRecovery?passKey=${req.body.passKey}&email=${req.body.email}&passwordRec=0&passincorrect=1&alert=Error in Encryption. Try again !`);
                    })

                }
            },(err)=>{
                res.redirect(`/passRecovery?passKey=${req.body.passKey}&email=${req.body.email}&passwordRec=0&passincorrect=1&alert=Some error came up while execution in database. Try again !`);
            })
            
        }else{
            res.redirect(`/passRecovery?passincorrect=1&alert=Email not Found. Enter the email and try again !`);
        }

    }else{
        
        
        tempPassKey = Math.floor(Math.random() * 100);
        mailData={
            from : 'nam.chawlaa@gmail.com',
            to : req.body.email,
            subject : 'Password Recovery',
            text : `${req.body}`,
            html: emailTempPrv + `<a href="13.50.237.64/passRecovery?passKey=${tempPassKey}&passwordRec=0&email=${req.body.email}" id="linking"> http://stutent.ddns.net/passRecovery?passKey=${tempPassKey}&passwordRec=0 </a>`+  emaiTempSucc
         
        };
    
        nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            auth : {
                    user:'kumarpranab091@gmail.com',
                    pass:'okhkjylihbnajxbd'
                }
        }).sendMail(mailData, function(error, info){
            if(error){
                // console.log('errror :- ' ,error)
                res.redirect(`/passRecovery?passincorrect=1&alert=Error while sending mail. Try after some time !`);
            }else{
                    // console.log('info :- ',info.messageId)
                // console.log(tempPassKey);
                checkPassKey.members[tempPassKey] = req.body.email  ;
                setTimeout(()=>{
                    delete checkPassKey.members[`${tempPassKey}`]
                },300000)
            
                res.redirect(`/passRecovery?passincorrect=1&alert=Mail Send Sucessfully !`);
            }
        })
    }
})


app.get('/register',function(req,res){
    console.log(req.url);
    // res.send(adminKey)
    if(req.session.user != undefined){
        res.redirect(`./adminFileInput?username=${req.session.user.name}`);
    }else{


        res.sendFile(path.join(__dirname,'register.html'));
    }

})
app.post('/register',function(req,res){
    console.log(req.url)
    // console.log(req.body)
        if(req.body.key != '1224#$%#wfkiodenr' ){
            
            res.redirect(`/register?passincorrect=1&alert=Hidden admin Key not found !`);
        }
        else if(req.body.password != req.body.confirmPassword){
            
            res.redirect(`/register?passincorrect=1&alert=Password doesnot match !`);
        }
        else if(Number(req.body.password.length) <= 5){
            
            res.redirect(`/register?passincorrect=1&alert=Password length should be more than 5 character !`);
        }
        else if(Number(req.body.name.length) <= 5){
            
            res.redirect(`/register?passincorrect=1&alert,=Name too short !`);
        }
        else if(Number(req.body.email.length) <= 5){
            
            res.redirect(`/register?passincorrect=1&alert=Email ID too short !`);
        }
        else{
            // hashPass = null;
            new Promise((resolve,reject)=>{
            
                bcrypt.genSalt(saltRounds, function(err, salt) {
                    if(err){reject([false,err]);}
                    bcrypt.hash(req.body.password, salt, function(err, hash){
                        // Store hash in your password DB.
                        if(err){
                            reject([false,err]);
                        }else{
                            // console.log("in bcrypt :- ", hash);
                            resolve([false,hash]);
                        } 
                    });
                })
    
            }).then((val)=>{
     
                console.log(val);
                new Promise((resolve,reject)=>{
                    mysqlPool.getConnection(function(err,mysqlConnect){
                        if(err){console.log(err); reject([false,err])}
                        else{
                            mysqlPool.query(`INSERT INTO register (name,email,password) VALUES ('${req.body.name}','${req.body.email}','${val[1]}')`, function(err, rows){
                                if(err){reject([false,err]);}
                                else {resolve([true,mysqlConnect]);}
                            });
                        }
                        mysqlConnect.release();
                    })
                }).then((val)=>{
                    req.session.user = {name:req.body.name,email:req.body.email};
                    req.session.save();
                    setTimeout(()=>{
                        req.session.destroy();
                    },86400000);
                    res.redirect(`./adminFileInput?username=${req.session.user.name}`);
                },(err)=>{
                    res.redirect(`/register?passincorrect=1&alert=Cannot store data in Database. You might be already Register !`)
                })
                
    
            },(err)=>{
                res.redirect(`/register?passincorrect=1&alert=Some error in password  process generation !`);
            })
        }

})



app.get('/adminFileInput',function(req,res){
    console.log(req.url);
    if(req.session.user == null){
        res.redirect(`/login?passincorrect=1&alert=Please login first !`);
    }
    else{

        if(req.query.username == null || req.query.username == undefined ){
            res.redirect(`/adminFileInput?username=${req.session.user.name}`);
        }else{

            console.log("user not null");
            res.sendFile(path.join(__dirname,`adminFileInput.html`));
            // res.sendFile(path.join(__dirname,`adminFileInput.html?username=${req.session.user.name}`));
        }
            
        
    }
});
app.get('/logout',function(req,res){
    console.log(req.url);
    req.session.destroy();
    res.redirect(`/`)
    // res.sendFile(path.join(__dirname,'logout.html'));
});


app.post('/subLoad',function(req,res){
    // donot put session request here  <----- important
    console.log(req.url);
    console.log(req.body);
    

        // console.log(req.body);
    new Promise((resolve,reject)=>{
        mysqlPool.getConnection(function(err,mysqlConnect){
            if(err){ reject([false,err])}
            else{
                mysqlPool.query(`SELECT * FROM subjects WHERE subjectId = ${req.body.subjectId}`, function(err, rows){
                    if(err){reject([false,err]);}
                    else {resolve([true,rows]);}
                });
            }
            mysqlConnect.release();
        })
    }).then((val)=>{
        
        if(val[1][0]==null || val[1][0]==undefined ){
            res.send({newSubjects : null, newSubjectId : req.body.subjectId})
        }else{
            res.send({newSubjects : val[1][0].allSubjects, newSubjectId : req.body.subjectId+1, link: val[1][0].link})
        }
    },(err)=>{
        console.log(err);
        res.send({newSubjects : null, newSubjectId : req.body.subjectId})
    })
    
})


app.post('/uploadFile',upload.single('file'),function(req,res){
    // console.log(req.session.user.name)

    console.log(req.url)

    // res.send('got it')
    // console.log('subject ',req.body.subject)
    if(req.session.user != undefined){
        console.log(req.session.user);
        new Promise((resolve,reject)=>{
            mysqlPool.getConnection(function(err,mysqlConnect){
                if(err){ reject([false,err])}
                else{
                    mysqlPool.query(`INSERT INTO files (fileName,fileId,subject,submitedBy,time) VALUES ('${req.file.originalname}','${req.file.filename}','${req.body.subject}','${req.session.user.name}',CURRENT_TIME())`, function(err, rows){
                        if(err){reject([false,err]);}
                        else {resolve([true,rows]);}
                    });
                }
                mysqlConnect.release();
            })
        }).then((val)=>{
            // console.log('completed :- ',val);
            res.send(`${req.file.originalname} file uploaded !`)
        },(err)=>{
            // console.log('err :- ',err);
            res.status(500).send('Some error came up while uploading ');
        })
    }

})


app.post('/fetchData',function(req,res){
    // console.log(req.session.user.name)
    console.log(req.url)
    // console.log(req.body)
    
    temp = null;
    new Promise((resolve,reject)=>{
        mysqlPool.getConnection(function(err,mysqlConnect){
            if(err){ reject([false,err])}
            else{
                mysqlPool.query(`SELECT COUNT(*) AS totalRow FROM files WHERE subject = '${req.body.subject}' ORDER BY time DESC; `, function(err, rows){
                    if(err){reject([false,err]);}
                    else { resolve([true,rows]); }
                });
            }
            mysqlConnect.release();
        })
    }).then((val)=>{
        // console.log(val[1][0].totalRow)
        temp = val[1][0].totalRow;
        // console.log('temp :- ',temp)
        // console.log('file data count :- ',req.body.fileDataCount,' ',req.body.subject)
        if(req.body.fileDataCount>temp){
            res.send('No more files !');
        }else{
            new Promise((resolve,reject)=>{
                mysqlPool.getConnection(function(err,mysqlConnect){
                    if(err){ reject([false,err])}
                    else{
                        mysqlPool.query(`SELECT * FROM files WHERE subject = '${req.body.subject}' ORDER BY time DESC LIMIT ${req.body.fileDataCount-1},1;`, function(err, rows){
                            if(err){reject([false,err]);}
                            else {resolve([true,rows]);}
                        });
                    }
                    mysqlConnect.release();
                })
            }).then((val)=>{
                // console.log(val[1][0]);
                // res.send(val[1][0]);
                res.send({
                    fileId: val[1][0].fileId,
                    fileName: val[1][0].fileName,
                    subject: val[1][0].subject,
                    submitedBy: val[1][0].submitedBy,
                    time: val[1][0].time,
                    nextRow : req.body.fileDataCount+1,
                })
                // res.send(val[1][0],{'totlaRwo':temp});
                
            },(err)=>{
                // console.log(err);
                res.header(500).send('Some error came up while fetching data from Database try again')
            })

        }
        
    },(err)=>{
        // console.log(err)
        res.header(500).send('Error while fetching data from Database. Try again !');
    })

    
    // res.send('got it')
    
})

app.get("/fileDownload", (req, res) => {
    console.log(req.url);
    // console.log(req.query);
    // res.send('got it');
    res.download(path.join(__dirname,`/currentFile/${req.query.fileId}`),`${req.query.fileName}`)
})

app.get("/fileDelete",(req,res)=>{
    console.log(req.url);
    // console.log(req.query);
    if(req.session.user != undefined){
        new Promise((resolve,reject)=>{
            mysqlPool.getConnection(function(err,mysqlConnect){
                if(err){ reject([false,err])}
                else{
                    mysqlPool.query(`DELETE FROM files WHERE files.fileId = '${req.query.id}';`, function(err, rows){
                        if(err){reject([false,err]);}
                        else {resolve([true,rows]);}
                    });
                }
                mysqlConnect.release();
            })  
        }).then((val)=>{
            fs.appendFile('deletedFile.txt', ` ${req.query.id}`, function (err) {
                if (err){console.log(err); console.log('Deleted File not Saved!'); };
                console.log('Delete d File Saved!');
            });
            res.send("File Deleted")
    
        },(err)=>{
            res.send("Some error came up in Database");
        })
    }else{
        res.header(500).send('You are not admin !');
    }
})

// app.get("/logingnow", (req, res) => {
//     req.session.user = {name:'I am here'};
//     req.session.save();
//     return res.send("Your are logged in");
// });
 
// app.get("/usernow", (req, res) => {
//     const sessionuser = req.session.user;
//     if(req.session.user == null){console.log('null');}
//     res.send(sessionuser);
// });
 
// // Logout page
// app.get("/logoutnow", (req, res) => {
//     req.session.destroy();
//     res.send("Your are logged out ");
// });







app.listen(8080,()=>{
    console.log(`http://${hostname}:${port}`)
});

