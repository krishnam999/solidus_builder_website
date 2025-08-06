// This is a basic backend server using Node.js and Express to handle form submissions.
// You would need to install these packages first: `npm install express body-parser nodemailer`

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer'); // A library to send emails.
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// POST route for the contact form
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // TODO: Replace with your actual email service provider credentials.
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // Example: using Gmail.
        auth: {
            user: 'mallappamudakavi9@gmail.com',
            pass: '1662003kS25*'
        }
    });

    // Email content
    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: 'krishnammudakavi@gmail.com', // The email address where you want to receive messages.
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send('Error sending email.');
        }
        console.log('Email sent:', info.response);
        res.status(200).send('Message sent successfully!');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});