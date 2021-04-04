import { Router } from 'express'
import { Repository } from 'sequelize-typescript'
import { User } from '@models'
import { INNER_API_V1_URL } from '@config'

export const userRouterFactory = (userRepository: Repository<User>) =>
  Router()
    .get(`${INNER_API_V1_URL}/current-user`, (req, res, next) =>
      userRepository
        .findByPk(1) // TODO: брать id из контекста для текущего пользователя
        .then((user) => (user ? res.json(user) : next({ statusCode: 404 })))
        .catch(next)
    )

    .post(`${INNER_API_V1_URL}/current-user`, (req, res, next) =>
      userRepository
        .create(req.body, {
          fields: ['login', 'name']
        })
        .then((user) => res.json(user))
        .catch(next)
    )

    .patch(`${INNER_API_V1_URL}/current-user`, (req, res, next) =>
      userRepository
        .update(req.body, {
          where: { id: 1 }, // TODO: брать id из контекста для текущего пользователя
          fields: ['login', 'name'],
          returning: true
        })
        .then((result) =>
          result[0] > 0 ? res.json(result[1][0]) : next({ statusCode: 404 })
        )
        .catch(next)
    )
