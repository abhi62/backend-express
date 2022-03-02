const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');

const bootcamp = require('./routes/bootcamp');
const connectDb = require('./config/db');
// const logger = require('./middleware/logger');

//loading env
dotenv.config({ path: './config/config.env' });

//connect to db

// console.log(connectDb());
connectDb();

const app = express();

//Body parser
app.use(express.json());

//Dev env logger middleware

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// app.use(logger); custom logger

// Mount routers
app.use('/api/v1/bootcamps', bootcamp);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(
    `server started at port ${PORT} in ${process.env.NODE_ENV} environment`
      .yellow.bold
  );
});

// Hnadling global error
process.on('unhandledRejection', (err, promise) => {
  console.log(`Custom Error: ${err.message}`.red.bold.underline);
  server.close(() => process.exit(1));
});
