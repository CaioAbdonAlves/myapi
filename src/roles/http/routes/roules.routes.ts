import { Router } from 'express'
import { Role } from '@roles/entities/Role'

const rolesRouter = Router()

const roles: Role[] = []

rolesRouter.post('/', (request, response) => {
  const { name } = request.body

  const role = new Role()

  Object.assign(role, { name, created_at: new Date() })

  roles.push(role)

  return response.status(201).json({ body: role })
})

export { rolesRouter }
