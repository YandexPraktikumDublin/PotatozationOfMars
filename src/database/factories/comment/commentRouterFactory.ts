import { Router } from 'express'
import { Repository } from 'sequelize-typescript'
import { Comment, Enjoyer, Reaction } from '@models'
import { DEFAULT_ERROR_MESSAGE, INNER_API_V1_URL } from '@config'

export const commentRouterFactory = (
  commentRepository: Repository<Comment>,
  enjoyerRepository: Repository<Enjoyer>,
  reactionRepository: Repository<Reaction>
) =>
  Router()
    .get(`${INNER_API_V1_URL}/topic-comments/:topicId`, async (req, res) => {
      try {
        if (!req.enjoyer) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        const comments = await commentRepository.findAll({
          where: { topicId: req.params.topicId, hierarchyLevel: 0 },
          include: [
            enjoyerRepository,
            { model: reactionRepository, include: [enjoyerRepository] },
            {
              model: commentRepository,
              as: 'children',
              include: [
                enjoyerRepository,
                { model: reactionRepository, include: [enjoyerRepository] }
              ]
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
        if (!req.enjoyer) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        const comment = await commentRepository.findByPk(req.params.id, {
          include: [
            enjoyerRepository,
            { model: reactionRepository, include: [enjoyerRepository] },
            {
              model: commentRepository,
              as: 'children',
              include: [
                enjoyerRepository,
                { model: reactionRepository, include: [enjoyerRepository] }
              ]
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
        if (!req.enjoyer) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        const comment = await commentRepository.create(
          { ...req.body, enjoyerId: req.enjoyer.id },
          {
            fields: [
              'content',
              'enjoyerId',
              'topicId',
              'parentId',
              'hierarchyLevel'
            ],
            validate: true
          }
        )

        await comment.reload({
          include: [
            enjoyerRepository,
            { model: reactionRepository, include: [enjoyerRepository] },
            {
              model: commentRepository,
              as: 'children',
              include: [
                enjoyerRepository,
                { model: reactionRepository, include: [enjoyerRepository] }
              ]
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
