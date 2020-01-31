const Comment = require('../models/comment')

module.exports.list = (req, res) => {

    Comment.find().populate('commentBy', ["_id", "code", "profile", "name", "email"]).populate('reply.commentBy', ["_id", "code", "profile", "name", "email"])

        .then(comment =>  res.json(comment))

        .catch(err => res.json(err))
}

module.exports.create = (req, res) => {

    const body = req.body

    const comment = new Comment(body)

    comment.save()
        .then(comment => res.json(comment))

        .catch(err => res.json(err))
}

module.exports.show = (req, res) => {
    const id = req.params.id

    Comment.findById(id).populate('commentBy', ["_id", "code", "profile", "name", "email"]).populate('reply.commentBy', ["_id", "code", "profile", "name", "email"])

        .then(comment => comment ? res.json(comment) : res.json({}))

        .catch(err => res.json(err))
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body

    Comment.findByIdAndUpdate(id, body, {runValidators : true, new : true})

        .then(comment => comment ? res.json(comment) : res.json({}))
        
        .catch(err => res.json(err))
}

module.exports.destroy = (req, res) => {
    const id = req.params.id

    Comment.findOneAndDelete()
        .then(comment => comment ? res.json(comment) : res.json({}))

        .catch(err => res.json(err))
}

