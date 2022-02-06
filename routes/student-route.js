const express = require('express');
const router = express.Router();

const {
  getStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent,
} = require('../controllers/student-controller');

// Route for get all the students
router.get('/', getStudents);

// Route for get the specific student by its id
router.get('/:id', getStudentById);

// Route for add new student
router.post('/', addStudent);

// Route for update student based on its id
router.put('/:id', updateStudent);

// Route for delete student based on its id
router.delete('/:id', deleteStudent);

module.exports = router;
