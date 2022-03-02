const express = require('express');
const dotenv = require('dotenv');

//loading env

dotenv.config({ path: './config/config.env' });

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `server started at port ${PORT} in ${process.env.NODE_ENV} environment`
  );
});
