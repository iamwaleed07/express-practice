import { Router } from "express"
import { getNotes } from "../controllers/note.controller.js"

let router = Router()

router.get("/", getNotes)

export default router
