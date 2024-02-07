import { Router } from 'express'
import { RoleRepository } from '@roles/repositories/RoleRepository'

const rolesRouter = Router()
const rolesRepository = new RoleRepository()

rolesRouter.post('/', (request, response) => {
  const { name } = request.body

  const role = rolesRepository.create({ name })

  return response.status(201).json({ body: role })
})

export { rolesRouter }
