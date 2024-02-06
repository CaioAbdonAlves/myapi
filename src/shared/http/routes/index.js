import { Router } from 'express'

const routes = Router()

routes.get('/', (request, response) => {
  return response.json({ body: { message: 'Opa safado' } })
})

export { routes }
