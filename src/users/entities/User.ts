import { Role } from '@roles/entities/Role'
import { Exclude } from 'class-transformer'
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('users')
export class User {
  @PrimaryColumn()
  public id?: string

  @Column()
  public name: string

  @Column()
  public email: string

  @Column()
  @Exclude()
  public password: string

  @Column()
  public isAdmin: string

  @Column()
  public avatar?: string

  @ManyToOne(() => Role, {
    cascade: true,
  })
  public role: Role

  @CreateDateColumn()
  public created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
