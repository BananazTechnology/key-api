import express from 'express'
import controller from '../controllers/posts'
const router = express.Router()

router.get('/opensea/key', controller.getKey)
// router.get('/posts/:id', controller.getPost)

export = router;
