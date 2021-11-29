// Based on: https://medium.com/@aleksandrasays/sending-magic-links-with-nodejs-765a8686996

import cors from "cors";
import express from "express";
import jwt from "jsonwebtoken";
import nodeMailer from "nodemailer";

const PORT = process.env.PORT || 4300;
const app = express();

// Set up middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set up email
const transport = nodeMailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 587,
  auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
  }
});

// Make email template for magic link
const emailTemplate = ({ email, link }) => `
  <h2>Hey ${email}</h2>
  <p>Here's the login link you just requested:</p>
  <p>${link}</p>
`;

// Generate token
const makeToken = (email) => {
  const expirationDate = new Date();
  expirationDate.setHours(new Date().getHours() + 1);

  return jwt.sign({ email, expirationDate }, process.env.JWT_SECRET_KEY);
};

const isAuthenticated = (req, res) => {
  const { token } = req.query

  if (!token) {
    res.status(403)
    res.send("Can't verify user.")

    return
  }

  let decoded

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
  }
  catch {
    res.status(403)
    res.send("Invalid auth credentials.")

    return
  }

  if (!decoded.hasOwnProperty("email") || !decoded.hasOwnProperty("expirationDate")) {
    res.status(403)
    res.send("Invalid auth credentials.")

    return
  }

  const { expirationDate } = decoded

  if (expirationDate < new Date()) {
    res.status(403)
    res.send("Token has expired.")

    return
  }

  res.status(200)
  res.send("User has been validated.")
}

// Get account information
app.get("/account", (req, res) => {
  isAuthenticated(req, res)
})

// Login endpoint
app.post("/login", (req, res) => {
  const { email } = req.body;

  if (!email) {
    res.status(404);
    res.send({
      message: "You didn't enter a valid email address.",
    });
  }

  const token = makeToken(email);

  const mailOptions = {
    from: "You Know",
    html: emailTemplate({
      email,
      link: `http://localhost:8080/account?token=${token}`,
    }),
    subject: "Your Magic Link",
    to: email,
  };

  return transport.sendMail(mailOptions, (error) => {
    if (error) {
      res.status(404);
      res.send("Can't send email.");
    } else {
      res.status(200);
      res.send(`Magic link sent. : http://localhost:8080/account?token=${token}`);
    }
  });
});

// Start up the server on the port defined in the environment
const server = app.listen(PORT, () => {
  console.info("Server running on port " + PORT);
});

export default server
