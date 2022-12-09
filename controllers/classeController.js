const Classe = require('../models/classes');

exports.getAll = async (req, res) => {
   
    try {

        const classes = await Classe.find()

        res.status(200).json({ error: false, data: classes })

    } catch (error) {

        res.status(404).json({error: true, message: 'classes not found!'})

    }

}

exports.create = async (req, res) => {

 const classe = new Classe({
        title: req.body.title,
        level :req.body.level,
        subjectId: req.body.subjectId
        })

    try {

       const newClasse = await classe.save()

       res.status(201).json(newClasse)

    } catch (error) {

       res.status(400).json({error: true, message: 'classe not created!'})

    }

}