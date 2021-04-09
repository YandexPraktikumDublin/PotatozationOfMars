import { Router } from 'express'
import { Repository } from 'sequelize-typescript'
import { Comment, User, Reaction } from '@models'
import { DEFAULT_ERROR_MESSAGE, INNER_API_V1_URL } from '@config'

export const commentRouterFactory = (
  commentRepository: Repository<Comment>,
  userRepository: Repository<User>,
  reactionRepository: Repository<Reaction>
) =>
  Router()
    .get(`${INNER_API_V1_URL}/topic-comments/:topicId`, async (req, res) => {
      try {
        if (!req.user) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        const comments = await commentRepository.findAll({
          where: { topicId: req.params.topicId, hierarchyLevel: 0 },
          include: [
            userRepository,
            reactionRepository,
            {
              model: commentRepository,
              as: 'children',
              include: [userRepository, reactionRepository]
            }
          ],
          order: [['createdAt', 'ASC']]
        })

        return res.json(comments)
      } catch (error) {
        res
          .status(500)
          .json({ errors: [error.message ?? DEFAULT_ERROR_MESSAGE] })
      }
    })

    .get(`${INNER_API_V1_URL}/comments/:id`, async (req, res) => {
      try {
        if (!req.user) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        const comment = await commentRepository.findByPk(req.params.id, {
          include: [
            userRepository,
            reactionRepository,
            {
              model: commentRepository,
              as: 'children',
              include: [userRepository, reactionRepository]
            }
          ]
        })

        if (!comment) {
          return res.status(404).json({ errors: ['Not Found'] })
        }

        return res.json(comment)
      } catch (error) {
        res
          .status(500)
          .json({ errors: [error.message ?? DEFAULT_ERROR_MESSAGE] })
      }
    })

    .post(`${INNER_API_V1_URL}/comments`, async (req, res) => {
      try {
        if (!req.user) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        const comment = await commentRepository.create(
          { ...req.body, userId: req.user.id },
          {
            fields: [
              'content',
              'userId',
              'topicId',
              'parentId',
              'hierarchyLevel'
            ],
            validate: true
          }
        )

        await comment.reload({
          include: [
            userRepository,
            reactionRepository,
            {
              model: commentRepository,
              as: 'children',
              include: [userRepository, reactionRepository]
            }
          ]
        })

        return res.status(201).json(comment)
      } catch (error) {
        res
          .status(500)
          .json({ errors: [error.message ?? DEFAULT_ERROR_MESSAGE] })
      }
    })
