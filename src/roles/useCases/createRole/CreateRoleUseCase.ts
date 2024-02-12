import { Role } from '@roles/entities/Role'
import { IRoleRepository } from '@roles/repositories/IRoleRepository'
import { AppError } from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'

type CreateRoleDTO = {
  name: string
}

@injectable()
export class CreateRoleUseCase {
  constructor(
    @inject('RoleRepository')
    private rolesRepository: IRoleRepository,
  ) {}

  async execute({ name }: CreateRoleDTO): Promise<Role> {
    const roleAlreadyExists = await this.rolesRepository.findByName(name)

    if (roleAlreadyExists) {
      throw new AppError('Role already exists')
    }

    return this.rolesRepository.create({ name })
  }
}
