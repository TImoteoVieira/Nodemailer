require('dotenv-safe').config();

module.exports = {
    host: "smtp.gmail.com",
    port: 587,
    user: "timoteo.vieira@linkcariri.com",
    pass: process.env.PASS_GM
}