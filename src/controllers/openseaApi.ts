import { Request, Response, NextFunction } from 'express'
import { ApiKey } from '../classes/ApiKey'
import { Queue } from '../classes/Queue'

// define queue
let keys = new Queue<ApiKey>()
// populate queu on startup
ApiKey.findAll((err: Error, keyList: ApiKey[]) => {
  if (err) {
    return
  }
  keyList.forEach(key => {
    keys.enqueue(key)
  })
})

const getKey = async (req: Request, res: Response, next: NextFunction) => {
  if (keys) {
    const key = keys.rotate()
    return res.status(200).json({
      key: `${key?.getKey()}`
    })
  } else {
    return res.status(200).json({
      message: 'No keys in the queue'
    })
  }
}

const loadKeys = async (req: Request, res: Response, next: NextFunction) => {
  keys = new Queue<ApiKey>()
  ApiKey.findAll((err: Error, keyList: ApiKey[]) => {
    if (err) {
      return res.status(500).json({ errorMessage: err.message })
    }

    keyList.forEach(key => {
      keys.enqueue(key)
    })
    const num = keys.size()
    res.status(200).json({ count: num })
  })
}

export default { getKey, loadKeys }
