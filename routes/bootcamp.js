const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({ success: true, msg: 'show all bootcamps' });
});
router.get('/:id', (req, res) => {
  res
    .status(200)
    .send({ success: true, msg: `showing  bootcamp ${req.params.id}` });
});
router.post('/', (req, res) => {
  res.status(200).send({ success: true, msg: 'create new bootcamps' });
});
router.put('/:id', (req, res) => {
  res
    .status(200)
    .send({ success: true, msg: `update bootcamp ${req.params.id}` });
});
router.delete('/:id', (req, res) => {
  res
    .status(200)
    .send({ success: true, msg: `delete bootcamp ${req.params.id}` });
});

module.exports = router;
