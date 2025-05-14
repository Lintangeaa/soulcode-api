const nodemailer = require('nodemailer');

const sendMail = async (req, res) => {
  if (!req.body) {
    return {
      status: false,
      message: 'All fields are required',
    };
  }

  const { email, password, to, subject, text } = req.body;

  if (!email || !password || !to || !subject || !text) {
    return {
      status: false,
      message: 'All fields are required',
    };
  }

  console.log('pass', password);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: email,
      pass: password,
    },
  });

  const mailOptions = {
    from: email,
    to,
    subject,
    text,
  };

  const info = await transporter.sendMail(mailOptions);

  console.log('Email sent:', info.response);

  return {
    status: true,
    message: 'Email sent successfully',
    data: info.response,
  };
};

module.exports = { sendMail };
