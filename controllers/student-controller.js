const Student = require('../models/Student');

const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
};

const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        res.status(200).json(student);
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

const addStudent = async (req, res) => {
    const student = new Student(req.body);
    try {
        const insertStudent = await Student.insertMany(student);
        res.status(201).json(insertStudent);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

const updateStudent = async (req, res) => {
    const student = await Student.findById(req.params.id);
    if (!student) {
        return res.status(404).json({
            message: "Student not found!"
        });
    }
    try {
        const newStudent = await Student.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    name: req.body.name,
                    email: req.body.email
                }
            }
        )
        res.status(200).json(newStudent);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

const deleteStudent = async (req, res) => {
    const student = await Student.findById(req.params.id);
    if (!student) {
        return res.status(404).json({
            message: "Student not found!"
        });
    }
    try {
        const removeStudent = await Student.deleteOne({ _id: req.params.id });
        res.status(200).json(removeStudent);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent
};