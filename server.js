const express = require('express');
const dotenv = require('dotenv');

const bootcamp = require('./routes/bootcamp');

//loading env
dotenv.config({ path: './config/config.env' });

const app = express();
// creating rout
app.use('/api/v1/bootcamps', bootcamp);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `server started at port ${PORT} in ${process.env.NODE_ENV} environment`
  );
});
