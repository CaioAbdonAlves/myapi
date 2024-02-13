import { inject, injectable } from 'tsyringe'
import { hash } from 'bcryptjs'
import { IRoleRepository } from '@roles/repositories/IRoleRepository'
import { AppError } from '@shared/errors/AppError'
import { User } from '@users/entities/User'
import { IUsersRepository } from '@users/repositories/IUsersRepository'

export type CreateUserDTO = {
  name: string
  email: string
  password: string
  isAdmin: string
  roleId: string
}

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('RoleRepository')
    private rolesRepository: IRoleRepository,
  ) {}

  async execute({
    name,
    email,
    isAdmin,
    password,
    roleId,
  }: CreateUserDTO): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email)

    if (userAlreadyExists) {
      throw new AppError('Email address already used')
    }

    const role = await this.rolesRepository.findById(roleId)
    if (!role) {
      throw new AppError('Role not found', 404)
    }

    const hashedPassword = await hash(password, 10)

    const user = await this.usersRepository.create({
      name,
      email,
      isAdmin,
      password: hashedPassword,
      role,
    })

    return user
  }
}
