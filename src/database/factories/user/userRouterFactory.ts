import { Router } from 'express'
import { Repository } from 'sequelize-typescript'
import { User } from '@models'

export const userRouterFactory = (userRepository: Repository<User>) =>
  Router()
    .get('/users/:id', (req, res, next) =>
      userRepository
        .findByPk(req.params.id)
        .then((user) => (user ? res.json(user) : next({ statusCode: 404 })))
        .catch(next)
    )

    .post('/users', (req, res, next) =>
      userRepository
        .create(req.body)
        .then((user) => res.json(user))
        .catch(next)
    )
