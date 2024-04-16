const mongoose = require('mongoose');

// create user schema
const marksSchema = new mongoose.Schema({
    // marks: {type : Number},
    // StudentName: {type : String},
    // studentId: {type : mongoose.Types.ObjectId}
    name: String,
  marks: {
    subject1: Number,
    subject2: Number,
    subject3: Number,
    subject4: Number,
  },
  total_Marks:String,
  percentage: String,
   
}, {
    timestamps: true,
});
    // create user mode
const studentModel = mongoose.model('marks', marksSchema);
module.exports = { studentModel };
