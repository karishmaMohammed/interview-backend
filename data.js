const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://Karishma:Karishma@cluster0.iulkcqg.mongodb.net/Interview?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a mongoose schema for students
const studentSchema = new mongoose.Schema({
  name: String,
  marks: Number,
});

const Student = mongoose.model('Student', studentSchema);

// CRUD operations

// Create a new student record
app.post('/api/students', async (req, res) => {
  try {
    const { name, marks } = req.body;
    const newStudent = await Student.create({ name, marks });
    // await newStudent.save();
    res.json(newStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read all students
app.get('/api/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update student record
app.put('/api/students/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { marks } = req.body;
    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { marks },
      { new: true }
    );
    res.json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete student record
app.delete('/api/students/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Student.findByIdAndDelete(id);
    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
