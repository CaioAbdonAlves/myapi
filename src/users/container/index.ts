import { container } from 'tsyringe'
import { UsersRepository } from '@users/repositories/UsersRepository'
import { IUsersRepository } from '@users/repositories/IUsersRepository'
import { CreateUserController } from '@users/useCases/createUser/CreateUserController'
import { ListUsersController } from '@users/useCases/listUsers/ListUsersController'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)

container.registerSingleton('CreateUserController', CreateUserController)
container.registerSingleton('ListUsersController', ListUsersController)
