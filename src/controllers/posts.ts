import { Request, Response, NextFunction } from 'express'
// import axios, { AxiosResponse } from 'axios'

let count = 0

// getting all posts
const getKey = async (req: Request, res: Response, next: NextFunction) => {
  count += 1
  return res.status(200).json({
    message: count
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

export default { getKey }
