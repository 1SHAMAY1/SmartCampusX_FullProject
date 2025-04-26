
const express = require('express');
const router = express.Router();

router.post('/mark', (req, res) => {
  res.json({ message: 'Attendance marked' });
});

module.exports = router;
