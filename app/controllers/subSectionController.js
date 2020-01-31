const SubSection = require ('../models/sub-section')

module.exports.list = (req, res) => {

    SubSection.find().populate('section', ["_id", "code", "name"]).populate('category', ["_id", "code", "name"])

        .then(subSection => res.json(subSection))

        .catch(err => res.json(err))
}

module.exports.create = (req, res) => {

    const body = req.body
    body.subSectionImage = req.file.path
    console.log(body)

    const subSection = new SubSection(body)

    subSection.save()
        .then(subSection => res.json(subSection))

        .catch(err => res.json(err))
}

module.exports.show = (req, res) => {

    const id = req.params.id

    SubSection.findById(id).populate('section', ["_id", "code", "name"]).populate('category', ["_id", "code", "name"])
        .then(subSection => subSection ? res.json(subSection) : res.json({}))

        .catch(err => res.json(err))
}

module.exports.update = (req, res) => {

    const body = req.body
    const id = req.params.id
    req.file && (body.subSectionImage = req.file.path)


    SubSection.findByIdAndUpdate(id, body, {runValidators : true, new : true})

        .then(subSection => subSection ? res.json(subSection) : res.json({}))

        .catch(err => res.json(err))
}

module.exports.destroy  = (req, res) => {
    const id = req.params.id

    SubSection.findByIdAndDelete(id)
        .then(subSection => subSection ? res.json(subSection) : res.json({}))

        .catch(err => res.json(err))
}