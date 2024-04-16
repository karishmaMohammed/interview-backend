const {studentModel} = require('../Models/marks');
 

async function createStudentMarks(req, res){
    let responseData; 
    try {
        const { name, marks, total_Marks, percentage } = req.body;
        const newStudent = new studentModel({ name, marks, total_Marks, percentage });
        await newStudent.save();
        responseData = {
            meta: {
                code: 200,
                success: true,
                message: 'Succesfull.',
            },
           
        }
        return res.status(responseData.meta.code).json(responseData);
        
    } catch (error) {
        console.log(error);
        responseData = {
            meta: {
                code: 200,
                success: true,
                message: 'Failed.',
            },
            
        }
        return res.status(responseData.meta.code).json(responseData);
    }
}

async function getStudentsMarks(req, res){
    let responseData;
    try {
        const students = await studentModel.find().sort({ percentage: -1 });
        
        responseData = {
            meta: {
                code: 200,
                success: true,
                message: 'Successfull.',
            },
            data:{
                student : students,
            }
            
        }
        return res.status(responseData.meta.code).json(responseData);
        
    } catch (error) {
        console.log(error);
        responseData = {
            meta: {
                code: 200,
                success: true,
                message: 'Failed.',
            },
            
        }
        return res.status(responseData.meta.code).json(responseData);
    }
}

async function editMarks(req, res){
    let responseData;
    try {
        const {studentId} = req.params
        const { name, marks, total_Marks, percentage, } = req.body;
        const edited = await studentModel.findOneAndUpdate({ _id: studentId }, { name, marks, total_Marks, percentage }); 
        responseData = {
            meta: {
                code: 200,
                success: true,
                message: 'Successfull',
            },
           
            
        }
        return res.status(responseData.meta.code).json(responseData);
    } catch (error) {
        console.log(error);
        responseData = {
            meta: {
                code: 200,
                success: true,
                message: 'Failed.',
            },
            
        }
        return res.status(responseData.meta.code).json(responseData);
    }
}

async function deleteMarks(req, res){
    let responseData;
    try {
        const { studentId } = req.params;
        const deletedMarks = await studentModel.findByIdAndDelete({ _id: studentId });
        responseData = {
            meta: {
                code: 200,
                success: true,
                message: 'Successfull',
            },
            
            
        }
        return res.status(responseData.meta.code).json(responseData);
        
    } catch (error) {
        console.log(error);
        responseData = {
            meta: {
                code: 200,
                success: true,
                message: 'Failed.',
            },
            
        }
        return res.status(responseData.meta.code).json(responseData);
    }
}

module.exports = {
    createStudentMarks,
    getStudentsMarks,
    editMarks,
    deleteMarks,
}