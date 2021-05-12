require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
// Import express-handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');
const { getMaxListeners } = require('process');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Describe what the following two lines of code are doing.
// The following two lines of code are setting Handlebars.js as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => res.render('home'));

app.post('/email', (req, res) => {
  // TODO
  // send email here

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kmydev1719@gmail.com',
      pass: 'Maverick2021!',
    },
  });

  const mailOptions = {
    from: 'kmydev1719@gmail.com',
    to: 'kmydev1719@gmail.com',
    subject: `${req.body.name} is contacting you from Portfolio site!`,
    text: `Email: ${req.body.email}\nPhone: ${req.body.phone}\n\nMessage:\n${req.body.message}`,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    err ? console.log(err.message) : console.log('message sent!');
  });

  res.json({ message: 'Email Sent!' });
});

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
