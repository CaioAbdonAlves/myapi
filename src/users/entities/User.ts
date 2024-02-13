import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
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
  public password: string

  @Column()
  public isAdmin: string

  @Column()
  public avatar?: string

  @CreateDateColumn()
  public created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
