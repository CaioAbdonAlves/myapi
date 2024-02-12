import { IRoleRepository } from '@roles/repositories/IRoleRepository'
import { AppError } from '@shared/errors/AppError'
import { injectable, inject } from 'tsyringe'

type DeleteRoleParams = {
  id: string
}

@injectable()
export class DeleteRoleUseCase {
  constructor(
    @inject('RoleRepository')
    private rolesRepository: IRoleRepository,
  ) {}

  async execute({ id }: DeleteRoleParams): Promise<void> {
    const role = await this.rolesRepository.findById(id)

    if (!role) {
      throw new AppError('Role not found', 404)
    }

    await this.rolesRepository.delete(role)
  }
}
