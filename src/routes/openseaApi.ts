import express from 'express'
import controller from '../controllers/openseaApi'
const router = express.Router()

router.get('/opensea/getkey', controller.getKey)
router.get('/opensea/loadkeys', controller.loadKeys)

export = router;
