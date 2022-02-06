const express = require('express');
const router = express.Router();

const {
  getLecturer,
  getLecturerById,
  addLecturer,
  updateLecturer,
  deleteLecturer,
} = require('../controllers/lecturer-controller');

// Route for get all the lecturers
router.get('/', getLecturer);

// Route for get the specific lecturer by its id
router.get('/:id', getLecturerById);

// Route for add new lecturer
router.post('/', addLecturer);

// Route for update lecturer based on its id
router.put('/:id', updateLecturer);

// Route for delete lecturer based on its id
router.delete('/:id', deleteLecturer);

module.exports = router;
