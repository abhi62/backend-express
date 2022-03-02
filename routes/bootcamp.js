const express = require('express');
const router = express.Router();
const {
  getBootcamp,
  getSingleBootcamp,
  postBootcamp,
  putBootcamp,
  deleteBootcamp,
} = require('../controllers/bootcamp');

router.route('/').get(getBootcamp).post(postBootcamp);
router
  .route('/:id')
  .get(getSingleBootcamp)
  .put(putBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
