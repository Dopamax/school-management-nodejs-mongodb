const Student = require('../models/students');

exports.getAll = async (req, res) => {
   
    try {

        const students = await Student.find()

        res.status(200).json({ error: false, data: students })

    } catch (error) {

        res.status(404).json({error: true, message: 'students not found!'})

    }

}

exports.create = async (req, res) => {

 const student = new Student({
            name: req.body.name,
            birth_date: req.body.birth_date,
            code: req.body.code,
            birth_city: req.body.birth_city,
            address: req.body.address,
            email: req.body.email
        })

    try {

       const newStudent = await student.save()

       res.status(201).json(newStudent)

    } catch (error) {

       res.status(400).json({error: true, message: 'students not created!'})

    }

}