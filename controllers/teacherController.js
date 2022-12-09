const Teacher = require('../models/Teachers');

exports.getAll = async (req, res) => {
   
    try {

        const teachers = await Teacher.find()

        res.status(200).json({ error: false, data: teachers })

    } catch (error) {

        res.status(404).json({error: true, message: 'students not found!'})

    }

}

exports.create = async (req, res) => {

 const teacher = new Teacher({
            name: req.body.name,
            birth_date: req.body.birth_date,
            birth_city: req.body.birth_city,
            address: req.body.address,
            email: req.body.email,
            password: req.body.password
        })

    try {

       const newTeacher = await teacher.save()

       res.status(201).json(newTeacher)

    } catch (error) {

       res.status(400).json({error: true, message: 'students not created!'})

    }

}