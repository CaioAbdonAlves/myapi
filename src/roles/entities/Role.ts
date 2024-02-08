import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('roles')
export class Role {
  @PrimaryColumn()
  public id?: string

  @Column()
  public name: string

  @CreateDateColumn()
  public created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
