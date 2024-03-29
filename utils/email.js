var nodemailer = require('nodemailer');
const ErrorResponse = require('../utils/errorResponse');
const { emailHost, emailPort, emailUsername, emailPassword } = require('../config/config');

exports.generateEmail = async (email, subject, html) => {
    try {
        // const SMTP = {
        //     host: emailHost,
        //     port: emailPort,
        //     auth: {
        //         user: emailUsername,
        //         pass: emailPassword
        //     }
        // }

        const transporter = nodemailer.createTransport({
            host: emailHost,
            port: emailPort,
            auth: {
                user: emailUsername,
                pass: emailPassword
            },
            secure: false,
            tls: {
                rejectUnauthorized: false,
                minVersion: "TLSv1.2"
            }
        });

        const mailOptions = {
            from: emailUsername,
            to: email,
            subject,
            text: "",
            html: html,
        };
        const send = await transporter.sendMail(mailOptions);


        // transporter.verify(function (error, success) {
        //     if (error) {
        //         console.log(error);
        //     } else {
        //         console.log("Server is ready to take our messages");
        //     }
        // });

        return true;
    } catch (err) {
        new ErrorResponse("Error in generating email", 400)
        console.log("err in generate email: ", err);
        return true;
    }
}

// this.generateEmail('newgen@mailinator.com', 'MARCH', 'details')

// this.generateEmail('jahakiy676@wikfee.com', 'this is the testing email', `<h1>hello</h1>`)
// this.generateEmail('shayanmustafa11@gmail.com', 'this is the testing email', `<h1>hello</h1>`)