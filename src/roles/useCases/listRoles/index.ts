import { RoleRepository } from '@roles/repositories/RoleRepository'
import { ListRoulesUseCase } from './ListRolesUseCase'
import { ListRolesController } from './ListRolesController'

const rolesRepository = RoleRepository.getInstance()
const listRolesUseCase = new ListRoulesUseCase(rolesRepository)
export const listRolesController = new ListRolesController(listRolesUseCase)
