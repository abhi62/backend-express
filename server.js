const express = require('express');
const dotenv = require('dotenv');

//loading env

dotenv.config({ path: './config/config.env' });
const app = express();
// creating rout

app.get('/api/v1/bootcamps', (req, res) => {
  // res.send({ name: 'brad' });
  res.status(200).send({ success: true, msg: 'show all bootcamps' });
});
app.get('/api/v1/bootcamps/:id', (req, res) => {
  res
    .status(200)
    .send({ success: true, msg: `showing  bootcamp ${req.params.id}` });
});
app.post('/api/v1/bootcamps', (req, res) => {
  // res.send({ name: 'brad' });
  res.status(200).send({ success: true, msg: 'create new bootcamps' });
});
app.put('/api/v1/bootcamps/:id', (req, res) => {
  res
    .status(200)
    .send({ success: true, msg: `update bootcamp ${req.params.id}` });
});
app.delete('/api/v1/bootcamps/:id', (req, res) => {
  // res.send({ name: 'brad' });
  res
    .status(200)
    .send({ success: true, msg: `delete bootcamp ${req.params.id}` });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `server started at port ${PORT} in ${process.env.NODE_ENV} environment`
  );
});
