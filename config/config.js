require('dotenv').config();


module.exports = {
    dbName: process.env.DB_NAME,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    env: process.env.NODE_ENV,
    dialect: 'mysql',
    port: process.env.PORT || 5000,
    emailHost: "smtp-mail.outlook.com",
    emailPort: 587,
    emailUsername: 'info@softlogicapp.com',
    emailPassword: 'Octa1993cyphion',
    EMAIL_SEND: 'fawadk2543@gmail.com',
    EMAIL_SEND_PASSWORD: 'urwy igqt sddh kppb',
    urlEmail: 'https://api.softlogicapp.com'

};