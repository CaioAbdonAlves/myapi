import { DataSource } from 'typeorm'
import { CreateRolesTable1707347931057 } from './migrations/1707347931057-CreateRolesTable'
import { Role } from '@roles/entities/Role'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role],
  migrations: [CreateRolesTable1707347931057],
})
