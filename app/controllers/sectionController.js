const Section = require('../models/section')

module.exports.list = (req, res) => {

    Section.find().populate('category', ["_id", "code", "name"])
        .then(section => {
            res.json(section)
        })

        .catch(err => res.json(err))
}

module.exports.create = (req, res) => {

    const body = req.body
    req.file && (body.sectionImage = req.file.path)


    const section = new Section(body)
    
    section.save()

    .then(section => {
        res.json(section)
    })

    .catch(err => res.json(err))
}

module.exports.show = (req, res) => {
    const id = req.params.id

    Section.findById(id).populate('category', ["_id", "code", "name"])
        .then(section => {
            section ? res.json(section) : res.json({})
        })

        .catch(err => res.json(err))
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    req.file && (body.sectionImage = req.file.path)

    Section.findByIdAndUpdate(id, body, {runValidators : true, new : true})

        .then(section => {
            section ? res.json(section) : res.json({})
        })

        .catch(err =>  res.json(err))

}

module.exports.destroy = (req, res) => {
    const id = req.params.id

    Section.findByIdAndDelete(id)
        .then(section => {
            section ? res.json(section) : res.json({})
        })

        .catch(err => res.json(err))
}