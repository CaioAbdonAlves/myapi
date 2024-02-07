import { Router } from 'express'
import { RoleRepository } from '@roles/repositories/RoleRepository'

const rolesRouter = Router()
const rolesRepository = new RoleRepository()

rolesRouter.post('/', (request, response) => {
  const { name } = request.body

  const roleAlreadyExists = rolesRepository.findByName(name)

  if (roleAlreadyExists) {
    return response.status(400).json({ error: 'Role already exists' })
  }

  const role = rolesRepository.create({ name })

  return response.status(201).json({ body: role })
})

rolesRouter.get('/', (request, response) => {
  const roles = rolesRepository.findAll()

  return response.status(200).json({ body: roles })
})

export { rolesRouter }
