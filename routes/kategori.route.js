import express,{ Router } from 'express'
import { createKategori} from '../controllers/kategori.controllers.js'

const router = Router()
router.post('/', createKategori)

export default router