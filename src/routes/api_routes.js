import { Router } from "express"
import noteRoute from "./notes.route.js"
import chatRoute from "./chat.route.js"

let router = Router()

router.use("/notes", noteRoute)
router.use("/chat", chatRoute)

export default router
