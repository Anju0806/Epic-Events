const mongoose = require('mongoose');

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
  images: [{
    type: String,
    required: true,
  }],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  stalls: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Stall',
  }],
  //users attending events
  attendees:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
});

// Define the virtual property upcomingEvents
eventSchema.virtual('upcomingEvents', {
    ref: 'Event',
    localField: '_id',
    foreignField: 'date',
    options: { sort: { date: 1 } }, // Sort by date in ascending order
    //options: { sort: { date: 1 }, limit: 5 } // Sort by date in ascending order and limit to 5 upcoming events
  });

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;

//join event feature
//

