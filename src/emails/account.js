const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'eriknayan@hotmail.com',
        subject: 'Welcome to the Task Manager App!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'eriknayan@hotmail.com',
        subject: 'Cancellation from Task Manager App!',
        text: `Good bye ${name}. Let us know how we can improve the app.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}