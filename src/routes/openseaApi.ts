import express from 'express'
import controller from '../controllers/openseaApi'
const router = express.Router()

router.get('/keys', controller.getKey)

export = router;
