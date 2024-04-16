const express = require('express');
const marksCtrl = require('./Marks.controller')

const router = express.Router();

router.route('/add').post(marksCtrl.createStudentMarks);
router.route('/all').get(marksCtrl.getStudentsMarks);
router.route('/update/:studentId').put(marksCtrl.editMarks);
router.route('/delete/:studentId').delete(marksCtrl.deleteMarks);

module.exports = router;