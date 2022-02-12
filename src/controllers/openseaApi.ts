import { Request, Response, NextFunction } from 'express'
import { ApiKey } from '../classes/ApiKey'
// import axios, { AxiosResponse } from 'axios'

const keys: ApiKey[] = []

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
  ApiKey.findAll((err: Error, keys: ApiKey[]) => {
    if (err) {
      return res.status(500).json({ errorMessage: err.message })
    }

    res.status(200).json({ data: keys })
  })
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
