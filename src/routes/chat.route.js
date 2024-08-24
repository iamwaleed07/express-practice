import { Router } from "express"

let router = Router()

router.get("/", function (req, res) {
  res.send("Chat Route")
})

router.get("/single-user", function (req, res) {
  res.send("Single user")
})

export default router
