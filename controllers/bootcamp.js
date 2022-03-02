//@desc    get all bootCamps
//@route   GET /api/v1/bootcamps
//@access  Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).send({ success: true, msg: 'show all bootcamps' });
};
//@desc    get single bootCamps
//@route   GET /api/v1/bootcamps/:id
//@access  Public
exports.getSingleBootcamp = (req, res, next) => {
  res
    .status(200)
    .send({ success: true, msg: `showing  bootcamp ${req.params.id}` });
};
//@desc   Create bootCamps
//@route   GET /api/v1/bootcamps
//@access  Private
exports.postBootcamp = (req, res, next) => {
  res.status(200).send({ success: true, msg: 'create new bootcamps' });
};
//@desc    Edit bootCamps
//@route   GET /api/v1/bootcamps
//@access  Private
exports.putBootcamp = (req, res, next) => {
  res
    .status(200)
    .send({ success: true, msg: `update bootcamp ${req.params.id}` });
};
//@desc    Delete bootCamps
//@route   DELETE /api/v1/bootcamps
//@access  Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .send({ success: true, msg: `delete bootcamp ${req.params.id}` });
};
