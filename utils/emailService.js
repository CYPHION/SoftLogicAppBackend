// utils/emailService.js

const nodemailer = require('nodemailer');

// Function to send emails
exports.sendEmail = async (subject, text, html) => {
    // Create a Nodemailer transporter
    // urwy igqt sddh kppb
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'fawadk2543@gmail.com', // Your Outlook email address
            pass: 'urwy igqt sddh kppb' // Your Outlook password
        },
    })
    // Define email options
    let mailOptions = {
        from: 'fawadk2543@gmail.com', // Sender email address
        to: 'fawadk2543@gmail.com',
        subject: subject,
        text: text,
        html: html
    };
    // let mailOptions = {
    //     from: 'info@softlogicapp.com', // Sender email address
    //     to: 'info@softlogicapp.com',
    //     subject: subject,
    //     text: text,
    // };

    // Send email
    try {
        let info = await transporter.sendMail(mailOptions);
        return info;
    } catch (error) {
        throw error;
    }
};
