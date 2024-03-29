import { Role } from '@roles/entities/Role'
import { RoleRepository } from '@roles/repositories/RoleRepository'
import { AppError } from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'

type UpdateRoleDTO = {
  id: string
  name: string
}

@injectable()
export class UpdateRoleUseCase {
  constructor(
    @inject('RoleRepository')
    private rolesRepository: RoleRepository,
  ) {}

  async execute({ id, name }: UpdateRoleDTO): Promise<Role> {
    const role = await this.rolesRepository.findById(id)

    if (!role) {
      throw new AppError('Role not found', 404)
    }

    const roleWithSameName = await this.rolesRepository.findByName(name)

    if (roleWithSameName && role.name !== roleWithSameName.name) {
      throw new AppError('Role name not informed or already in use', 400)
    }

    role.name = name

    return this.rolesRepository.save(role)
  }
}
