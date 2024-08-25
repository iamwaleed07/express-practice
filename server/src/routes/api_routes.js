import { Router } from "express"
import noteRoute from "./notes.route.js"

let router = Router()

router.use("/notes", noteRoute)

export default router
