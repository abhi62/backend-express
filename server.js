const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const bootcamp = require('./routes/bootcamp');
const logger = require('./middleware/logger');

//loading env
dotenv.config({ path: './config/config.env' });

const app = express();

//Dev env logger middleware

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// app.use(logger); custom logger

// Mount routers
app.use('/api/v1/bootcamps', bootcamp);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `server started at port ${PORT} in ${process.env.NODE_ENV} environment`
  );
});
