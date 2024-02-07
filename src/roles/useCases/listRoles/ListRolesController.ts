import { Request, Response } from 'express'
import { ListRoulesUseCase } from './ListRolesUseCase'

export class ListRolesController {
  constructor(private listRolesUseCase: ListRoulesUseCase) {}

  handle(request: Request, response: Response): Response {
    const roles = this.listRolesUseCase.execute()
    return response.json(roles)
  }
}
