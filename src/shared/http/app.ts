import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import cors from 'cors'
import path from 'node:path'
import { errors } from 'celebrate'
import { routes } from './routes'
import { AppError } from '@shared/errors/AppError'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from '../../swagger.json'
import '@shared/container'
import uploadConfig from '@config/upload'

const app = express()
app.use(cors())

app.use(express.json())
app.use('/files', express.static(uploadConfig.directory))
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(routes)
app.use(errors())
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        body: {
          status: 'error',
          message: error.message,
        },
      })
    }

    console.log(error)
    return response.status(500).json({
      body: {
        status: 'error',
        message: 'Internal server error',
      },
    })
  },
)

export { app }
