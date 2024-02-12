import { DataSource } from 'typeorm'
import { CreateRolesTable1707347931057 } from './migrations/1707347931057-CreateRolesTable'
import { Role } from '@roles/entities/Role'
import { CreateUsersTable1707714044621 } from './migrations/1707714044621-CreateUsersTable'
import { AddRoleIdToUsersTable1657997456404 } from './migrations/1707750309599-AddRoleIDToUsersTable'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role],
  migrations: [
    CreateRolesTable1707347931057,
    CreateUsersTable1707714044621,
    AddRoleIdToUsersTable1657997456404,
  ],
})
