import { Router } from 'express'
import { createObat} from '../controllers/obat.controllers.js'

const router = Router()
router.post('/', createObat)
export default router