// Create a controller for lecturer

const Lecturer = require('../models/Lecturer');

const getLecturer = async (req, res) => {
  try {
    const lecturer = await Lecturer.find();
    res.status(200).json(lecturer);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const getLecturerById = async (req, res) => {
  try {
    const lecturer = await Lecturer.findById(req.params.id);
    res.status(200).json(lecturer);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const addLecturer = async (req, res) => {
  const lecturer = new Lecturer(req.body);
  try {
    const insertLecturer = await Lecturer.insertMany(lecturer);
    res.status(201).json(insertLecturer);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const updateLecturer = async (req, res) => {
  const lecturer = await Lecturer.findById(req.params.id);
  if (!lecturer) {
    return res.status(404).json({
      message: 'Lecturer not found!',
    });
  }
  try {
    const newLecturer = await Lecturer.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
        },
      }
    );
    res.status(200).json(newLecturer);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const deleteLecturer = async (req, res) => {
  const lecturer = await Lecturer.findById(req.params.id);
  if (!lecturer) {
    return res.status(404).json({
      message: 'Lecturer not found!',
    });
  }
  try {
    const deleteLecturer = await Lecturer.deleteOne({ _id: req.params.id });
    res.status(200).json(deleteLecturer);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  getLecturer,
  getLecturerById,
  addLecturer,
  updateLecturer,
  deleteLecturer,
};
