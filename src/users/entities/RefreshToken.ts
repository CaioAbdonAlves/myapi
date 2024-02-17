import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('refresh_tokens')
export class RefreshToken {
  @PrimaryColumn()
  public id?: string

  @Column()
  public token: string

  @Column()
  public valid: boolean

  @Column()
  public user_id: string

  @Column()
  public expires: Date

  @CreateDateColumn()
  public created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
