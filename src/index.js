const nodemailer = require('nodemailer');
const { h } = require('vue');
const SMTP_CONFIG = require('../config/smtp');

const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    PORT: SMTP_CONFIG.port,
    secure: false,
    auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass,
    },
    tls: {
        rejectUnauthorized: false
    }
});


async function run(){
    const mailSent = await transporter.sendMail({
        text: 'Teste 03 com nodemailer e .env',
        subject: 'Nodemailer',
        from: 'Timóteo Vieira <timoteo.vieira@linkcariri.com>',
        to: ['timoteo7charles777@gmail.com'],
        html: `
        <html>
            <body>
                <h1>Titulo do email</h1>

                <p>
                    Este é um e-mail teste utilizando o Nodejs com a biblioteca Nodemailer
                </p>
            </body>
        </html>
        `,
    });
    console.log(mailSent)
}

run();