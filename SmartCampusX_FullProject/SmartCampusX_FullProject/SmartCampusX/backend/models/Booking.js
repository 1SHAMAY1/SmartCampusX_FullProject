
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  room: { type: String, required: true },
  date: { type: Date, required: true },
  bookedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Booking', BookingSchema);
