const dotenv = require('dotenv').config({ path: './config.env' });
const mongoose = require('mongoose');
const app = require('./app');

////////////////////////////////////////////////////
/// DATABASE CONNECTION:

const database = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose
  .connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Remote database connection successful 📡'));

////////////////////////////////////////////////////
/// START SERVER:

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
