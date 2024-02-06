import { AppError } from '@shared/errors/AppError'
import { Router } from 'express'

const routes = Router()

routes.get('/', (request, response) => {
  throw new AppError('Acesso Negado', 401)
  return response.json({ body: { message: 'Opa safado' } })
})

export { routes }
