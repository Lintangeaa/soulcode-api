async function getCustomer(req, res) {
  return res.status(200).json({
    message: 'Sukses',
    result: [
      {
        id: 1,
        name: 'test-1',
      },
      {
        id: 2,
        name: 'test-2',
      },
    ],
  });
}

module.exports = {
  getCustomer,
};
