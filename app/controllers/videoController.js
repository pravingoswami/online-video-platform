const Video = require('../models/video')

module.exports.list = (req, res) => {

    // Video.find().populate('subSection', ["_id", "name", "code"]).populate('section', ["_id", "name", "code"]).populate('category', ["_id", "name", "code"]).populate({path : 'comments._id', model : 'Comment'})
    
    Video.find().populate('subSection', ["_id", "name", "code"]).populate('section', ["_id", "name", "code"]).populate('category', ["_id", "name", "code"])
    
        .then(video => video ? res.json(video) : res.json({}))

        .catch(err => res.json(err))
}

module.exports.create = (req, res) => {

    const body = req.body
    req.file && (body.thumbnail = req.file.path)


    const video = new Video(body)

    video.save({$inc : {position : 1}})

        .then(video => video ? res.json(video) : res.json({}))

        .catch(err => res.json(err))
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Video.findById(id)
    // Video.findById(id).populate({path : 'comments._id', model : 'Comment'}).populate({path : 'comments.commentBy', model : 'Comment'})

        .then(video => video ? res.json(video) : res.json({}))

        .catch(err => res.json(err))
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    req.file && (body.thumbnail = req.file.path)


    Video.findByIdAndUpdate(id, body, {runValidators : true, new : true})

        .then(video => video ? res.json(video) : res.json({}))

        .catch(err => res.json(err))
}

module.exports.destroy = (req, res) => {
    const id = req.params.id

    Video.findByIdAndDelete(id)
        .then(video => video ? res.json(video) : res.json({}))

        .catch(err => res.json(err))
}