
const express = require('express');
const router = express.Router();

router.post('/book', (req, res) => {
  res.json({ message: 'Room booked successfully' });
});

module.exports = router;
