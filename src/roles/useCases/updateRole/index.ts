import { RoleRepository } from '@roles/repositories/RoleRepository'
import { UpdateRoleUseCase } from './UpdateRoleUseCase'
import { UpdateRoleController } from './UpdateRoleController'

const rolesRepository = RoleRepository.getInstance()
const updateRoleUseCase = new UpdateRoleUseCase(rolesRepository)
export const showRolesController = new UpdateRoleController(updateRoleUseCase)
