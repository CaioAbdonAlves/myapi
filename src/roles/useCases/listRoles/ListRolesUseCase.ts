import { Role } from '@roles/entities/Role'
import { RoleRepository } from '@roles/repositories/RoleRepository'

export class ListRoulesUseCase {
  constructor(private rolesRepository: RoleRepository) {}

  execute(): Role[] {
    return this.rolesRepository.findAll()
  }
}
