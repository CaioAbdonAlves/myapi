import { Router } from 'express'
import { rolesRouter } from '@roles/http/routes/roules.routes'
import { usersRouter } from '@users/http/users.routes'

const routes = Router()

routes.get('/', (request, response) => {
  return response.json({ body: { message: 'Opa safado' } })
})

routes.use('/roles', rolesRouter)
routes.use('/users', usersRouter)

export { routes }
