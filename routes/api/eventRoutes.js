const router = require('express').Router();

//any member-user can join event
// /api/events/:eventId/users/:userId
//router.route('/:eventId/users/:userId').get(joinEvent);

// /api/events
//router.route('/').get(getEvents).post(addEvent).put(updateEvent); 

// /api/events/:eventId
//router.route('/:eventId').get(getEvent).delete(deleteEvent);

module.exports = router;




//ToDo :deleting event will delete associated stalls also