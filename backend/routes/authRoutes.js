
const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { email } = req.body;
  res.json({ message: `User ${email} logged in successfully` });
});

module.exports = router;
