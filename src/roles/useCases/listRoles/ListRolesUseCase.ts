import { RolesPaginateProperties } from '@roles/repositories/IRoleRepository'
import { RoleRepository } from '@roles/repositories/RoleRepository'
import { inject, injectable } from 'tsyringe'

type ListRolesUseCaseParams = {
  page: number
  limit: number
}

@injectable()
export class ListRoulesUseCase {
  constructor(
    @inject('RoleRepository')
    private rolesRepository: RoleRepository,
  ) {}

  async execute({
    page,
    limit,
  }: ListRolesUseCaseParams): Promise<RolesPaginateProperties> {
    const take = limit
    const skip = (Number(page) - 1) * take
    return this.rolesRepository.findAll({ page, skip, take })
  }
}
