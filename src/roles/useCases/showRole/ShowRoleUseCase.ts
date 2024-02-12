import { Role } from '@roles/entities/Role'
import { RoleRepository } from '@roles/repositories/RoleRepository'
import { AppError } from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'

type ShowRoleParams = {
  id: string
}

@injectable()
export class ShowRoleUseCase {
  constructor(
    @inject('RoleRepository')
    private rolesRepository: RoleRepository,
  ) {}

  async execute({ id }: ShowRoleParams): Promise<Role> {
    const role = await this.rolesRepository.findById(id)

    if (!role) {
      throw new AppError('Role not found', 404)
    }

    return role
  }
}
