const Bootcamp = require('../models/Bootcamps');

//@desc    get all bootCamps
//@route   GET /api/v1/bootcamps
//@access  Public
exports.getBootcamp = async (req, res, next) => {
  const getBootcamp = await Bootcamp.find();

  try {
    res.status(200).json({
      success: true,
      count: getBootcamp.length,
      data: getBootcamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
  // res
  //   .status(200)
  //   .send({ success: true, msg: 'show alll bootcamps', hello: req.hello });
};
//@desc    get single bootCamps
//@route   GET /api/v1/bootcamps/:id
//@access  Public
exports.getSingleBootcamp = async (req, res, next) => {
  const getBootcamp = await Bootcamp.findById(req.params.id);

  try {
    if (!getBootcamp) {
      return res.status(400).json({
        success: false,
      });
    }

    res.status(200).json({
      success: true,
      data: getBootcamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
  // res
  //   .status(200)
  //   .send({ success: true, msg: `showing  bootcamp ${req.params.id}` });
};
//@desc   Create bootCamps
//@route   GET /api/v1/bootcamps
//@access  Private
exports.postBootcamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);

  try {
    res.status(201).json({
      success: true,
      data: bootcamp,
    });
    console.log('correct');
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }

  // console.log(req.body);
  // res.status(200).send({ success: true, msg: 'create new bootcamps' });
};
//@desc    Edit bootCamps
//@route   GET /api/v1/bootcamps
//@access  Private
exports.putBootcamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  try {
    if (!bootcamp) {
      return res.status(400).json({
        success: false,
      });
    } else {
      return res.status(201).json({
        success: true,
        data: bootcamp,
      });
    }
    console.log('correct');
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
  // res
  //   .status(200)
  //   .send({ success: true, msg: `update bootcamp ${req.params.id}` });
};
//@desc    Delete bootCamps
//@route   DELETE /api/v1/bootcamps
//@access  Private
exports.deleteBootcamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

  try {
    if (!bootcamp) {
      return res.status(400).json({
        success: false,
      });
    } else {
      return res.status(201).json({
        success: true,

        data: {},
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
  // res
  //   .status(200)
  //   .send({ success: true, msg: `delete bootcamp ${req.params.id}` });
};
