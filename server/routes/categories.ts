import express from 'express'

import * as db from '../db/db'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const data = await db.getData('users')
    res.json(data)
  } catch (error) {
    res.status(500).send(console.error(error))
  }
})

router.delete('/', async (req, res) => {
  const id = req.body.id
  try {
    const data = await db.deleteData('categories', id)
    res.json(data)
  } catch (error) {
    res.status(500).send(console.error(error))
  }
})

router.post('/', async (req, res) => {
  const newData = req.body
  try {
    const data = await db.addData('users', newData)
    res.json(data)
  } catch (error) {
    res.status(500).send(console.error(error))
  }
})

export default router
