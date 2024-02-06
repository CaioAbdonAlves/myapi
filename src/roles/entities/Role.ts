import { v4 as uuidv4 } from 'uuid'

export class Role {
  public id?: string
  public name: string
  public created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
