import { container } from 'tsyringe'
import { IRoleRepository } from '@roles/repositories/IRoleRepository'
import { RoleRepository } from '@roles/repositories/RoleRepository'
import { CreateRoleController } from '@roles/useCases/createRole/CreateRoleController'
import { ListRolesController } from '@roles/useCases/listRoles/ListRolesController'
import { ShowRoleController } from '@roles/useCases/showRole/ShowRoleController'
import { UpdateRoleController } from '@roles/useCases/updateRole/UpdateRoleController'
import { DeleteRoleController } from '@roles/useCases/deleteRole/DeleteRoleController'

container.registerSingleton<IRoleRepository>('RoleRepository', RoleRepository)

container.registerSingleton('CreateRoleController', CreateRoleController)
container.registerSingleton('ListRolesController', ListRolesController)
container.registerSingleton('ShowRoleController', ShowRoleController)
container.registerSingleton('UpdateRoleController', UpdateRoleController)
container.registerSingleton('DeleteRoleController', DeleteRoleController)
