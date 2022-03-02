const Bootcamp = require('../models/Bootcamps');
const ErrorResponse = require('../utils/errorResponse');

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
};

//@desc    get single bootCamps
//@route   GET /api/v1/bootcamps/:id
//@access  Public
exports.getSingleBootcamp = async (req, res, next) => {
  const getBootcamp = await Bootcamp.findById(req.params.id);

  try {
    if (!getBootcamp) {
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404);
    }
    res.status(200).json({
      success: true,
      data: getBootcamp,
    });
    console.log('try');
  } catch (error) {
    // res.status(400).json({
    //   success: false,
    // });
    next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
    console.log('catch');
  }
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
    }
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
};
