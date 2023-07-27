const mongoose = require('mongoose');

// Event schema
const eventSchema = new mongoose.Schema({
// Event schema fields
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
  ticketInformation: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  images: [{
    type: String,
    required: true,
  }],
  stalls: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Stall',
  }],
  //members attending events
  attendees:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
});

// the virtual property total attendees
eventSchema.virtual('attendeesCount').get(function() {
  return this.attendees.length;
});

// the virtual property upcomingEvents
eventSchema.virtual('upcomingEvents', {
    ref: 'Event',
    localField: '_id',
    foreignField: 'date',
    options: { sort: { date: 1 } }, // Sort by date in ascending order
    //options: { sort: { date: 1 }, limit: 5 } // Sort by date in ascending order and limit to 5 upcoming events
  });

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;



