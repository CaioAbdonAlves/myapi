import { DataSource } from 'typeorm'
import { CreateRolesTable1707347931057 } from './migrations/1707347931057-CreateRolesTable'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [],
  migrations: [CreateRolesTable1707347931057],
})
