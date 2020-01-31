const User = require('../models/user')

module.exports.list = (req, res) => {

    User.find()

        .then(user => res.json(user))

        .catch(err => res.json(err))
}

module.exports.create = (req, res) => {


    const body = req.body
    body.profile = req.file.path

    const user = new User(body)

    user.save()

        .then(user => res.json(user))

        .catch(err => res.json(err))

}

module.exports.show = (req, res) => {
    const id = req.params.id

    User.findById(id)

        .then(user => user ? res.json(user) : res.json({}))

        .catch(err => res.json(err))
}

module.exports.update = (req, res) => {

    const id = req.params.file
    const body = req.body
    
    req.file && (body.profile = req.file.path)
    console.log(body)

    User.updateOne(id, body, {runValidators : true, new : true})

        .then(user => user ? res.json(user) : res.json({}))

        .catch(err => res.json(err))

}

module.exports.destroy = (req, res) => {

    const id = req.params.id

    User.findByIdAndDelete(id)

        .then(user => user ? res.json(user) : res.json({}))

        .catch(err => res.json(err))

}