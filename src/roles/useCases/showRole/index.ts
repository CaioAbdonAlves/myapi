import { RoleRepository } from '@roles/repositories/RoleRepository'
import { ShowRoleUseCase } from './ShowRoleUseCase'
import { ShowRoleController } from './ShowRoleController'

const rolesRepository = RoleRepository.getInstance()
const showRoleUseCase = new ShowRoleUseCase(rolesRepository)
export const showRolesController = new ShowRoleController(showRoleUseCase)
