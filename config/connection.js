const { connect, connection } = require('mongoose');

connect('mongodb://localhost/epic-events', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
