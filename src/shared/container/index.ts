import { container } from 'tsyringe'
import { IRoleRepository } from '@roles/repositories/IRoleRepository'
import { RoleRepository } from '@roles/repositories/RoleRepository'

container.registerSingleton<IRoleRepository>('RoleRepository', RoleRepository)
