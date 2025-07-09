async function webhook(req, res) {
  const { deviceNumber, message, from } = req.body;

  console.log('Device:', deviceNumber);
  console.log('Message:', message);
  console.log('From:', from);

  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  return res
    .status(200)
    .json({ message: 'message diterima dari webhook', result: message });
}

module.exports = {
  webhook,
};
