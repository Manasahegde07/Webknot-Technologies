const mongoose = require('mongoose');

const AttendeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],
});

module.exports = mongoose.model('Attendee', AttendeeSchema);