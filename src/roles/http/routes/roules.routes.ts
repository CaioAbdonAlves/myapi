import { RoleRepository } from '@roles/repositories/RoleRepository'
import { createRolesController } from '@roles/useCases/createRole'
import { Router } from 'express'

const rolesRouter = Router()
const rolesRepository = new RoleRepository()

rolesRouter.post('/', (request, response) => {
  return createRolesController.handle(request, response)
})

rolesRouter.get('/', (request, response) => {
  const roles = rolesRepository.findAll()

  return response.status(200).json({ body: roles })
})

export { rolesRouter }
