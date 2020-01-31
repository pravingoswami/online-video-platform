const express = require('express')
const multer = require('multer')



const router = express.Router()

const categoryController = require('../app/controllers/categoryController')
const SectionContoller = require('../app/controllers/sectionController')
const subSectionController = require('../app/controllers/subSectionController')
const videoController = require('../app/controllers/videoController')
const commentController = require('../app/controllers/commentController')
const userController = require('../app/controllers/userController')


router.get('/categories', categoryController.list)
router.post('/categories', categoryController.create)
router.get('/categories/:id', categoryController.show)
router.put('/categories/:id', categoryController.update)
router.delete('/categories/:id', categoryController.destroy)

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const sectionStorage = multer.diskStorage({
    destination : function(req, file, cb){
        console.log(req.params.type)
        cb(null, './uploads/section/')
    },
    filename : function(req, file, cb){
        cb(null, file.originalname)
    }
})



const uploadSection = multer({storage : sectionStorage, fileFilter : fileFilter})

router.get('/sections', SectionContoller.list)
router.post('/sections',uploadSection.single('sectionImage'),  SectionContoller.create)
router.get('/sections/:id', SectionContoller.show)
router.put('/sections/:id',uploadSection.single('sectionImage'),  SectionContoller.update)
router.delete('/sections/:id', SectionContoller.destroy)


const subSectionStorage = multer.diskStorage({
    destination : function(req, file, cb){
        console.log(req.params.type)
        cb(null, './uploads/section/')
    },
    filename : function(req, file, cb){
        cb(null, file.originalname)
    }
})



const uploadSubSection = multer({storage : subSectionStorage, fileFilter : fileFilter})

router.get('/sub-sections', subSectionController.list)
router.post('/sub-sections',uploadSubSection.single('subSectionImage') , subSectionController.create)
router.get('/sub-sections/:id', subSectionController.show)
router.put('/sub-sections/:id',uploadSubSection.single('subSectionImage') , subSectionController.update)
router.delete('/sub-sections/:id', subSectionController.destroy)


const videoStorage = multer.diskStorage({
    destination : function(req, file, cb){
        console.log(req.params.type)
        cb(null, './uploads/video-thumbnail/')
    },
    filename : function(req, file, cb){
        cb(null, file.originalname)
    }
})



const uploadVideo = multer({storage : videoStorage, fileFilter : fileFilter})


router.get('/videos' , videoController.list)
router.post('/videos' , uploadVideo.single('thumbnail') , videoController.create)
router.get('/videos/:id' , videoController.show)
router.put('/videos/:id' , uploadVideo.single('thumbnail') , videoController.update)
router.delete('/videos/:id' , videoController.destroy)


router.get('/comments', commentController.list)
router.post('/comments', commentController.create)
router.get('/comments/:id', commentController.show)
router.put('/comments/:id', commentController.update)
router.delete('/comments/:id', commentController.destroy)


const profileStorage = multer.diskStorage({
    destination : function(req, file, cb){
        console.log(req.params.type)
        cb(null, './uploads/user-profile/')
    },
    filename : function(req, file, cb){
        cb(null, file.originalname)
    }
})



const uploadProfile = multer({storage : profileStorage, fileFilter : fileFilter})

router.get('/users' , userController.list)
router.post('/users' , uploadProfile.single('profile') , userController.create)
router.get('/users/:id' , userController.show)
router.put('/users/:id' , uploadProfile.single('profile') , userController.update)
router.delete('/users/:id' , userController.destroy)











module.exports = router