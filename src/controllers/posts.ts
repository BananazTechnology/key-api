import { Request, Response, NextFunction } from 'express'
import { ApiKey } from '../classes/ApiKey'
import { db } from '../db'
// import axios, { AxiosResponse } from 'axios'

let keys = ApiKey.getAllKeys()

const getKey = async (req: Request, res: Response, next: NextFunction) => {
  if (keys) {
    return res.status(200).json({
      message: `Loaded ${keys.length} keys`
    })
  } else {
    return res.status(200).json({
      message: 'No keys were loaded'
    })
  }
}

const loadKeys = async (req: Request, res: Response, next: NextFunction) => {
  keys = ApiKey.getAllKeys()
  if (db.authorized) {
    return res.status(200).json({
      message: 'DB Connection GOOD'
    })
  } else {
    return res.status(200).json({
      message: 'DB Connection BAD'
    })
  }
}

/* // getting a single post
const getPost = async (req: Request, res: Response, next: NextFunction) => {
  // get the post id from the req
  const id: string = req.params.id
  // get the post
  const result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post: Post = result.data
  return res.status(200).json({
    message: post
  })
} */

export default { getKey, loadKeys }
