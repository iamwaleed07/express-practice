import api_routes from "./api_routes.js"

const baseRouter = (app) => {
  app.use("/api", api_routes)
}

export default baseRouter
