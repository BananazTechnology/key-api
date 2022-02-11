import express from 'express'
import controller from '../controllers/posts'
const router = express.Router()

router.get('/opensea/key', controller.getKey)
router.get('/opensea/loadkeys', controller.loadKeys)
// router.get('/posts/:id', controller.getPost)

export = router;
