import { Router } from 'express'
import { rolesRouter } from '@roles/http/routes/roules.routes'

const routes = Router()

routes.get('/', (request, response) => {
  return response.json({ body: { message: 'Opa safado' } })
})

routes.use('/roles', rolesRouter)

export { routes }
