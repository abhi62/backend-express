const express = require('express');
const dotenv = require('dotenv');

const bootcamp = require('./routes/bootcamp');

//loading env
dotenv.config({ path: './config/config.env' });

const app = express();
const logger = (req, res, next) => {
  req.hello = 'Hello world';
  console.log('Middleware ran');
  next();
};

app.use(logger);
// creating rout
app.use('/api/v1/bootcamps', bootcamp);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `server started at port ${PORT} in ${process.env.NODE_ENV} environment`
  );
});
