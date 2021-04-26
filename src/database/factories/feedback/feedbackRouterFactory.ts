import { Router } from 'express'
import { Repository } from 'sequelize-typescript'
import { Feedback, RoleEnum } from '@models'
import { DEFAULT_ERROR_MESSAGE, INNER_API_V1_URL, T_800_PHRASES } from '@config'
import { getRandomArrayElement, sendMessageByTelegram } from '@utils/misc'

export const feedbackRouterFactory = (
  feedbackRepository: Repository<Feedback>
) =>
  Router()
    .get(`${INNER_API_V1_URL}/feedbacks`, async (req, res) => {
      try {
        if (
          !req.enjoyer ||
          req.enjoyer.getDataValue('role') !== RoleEnum.admin
        ) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        const feedbacks = await feedbackRepository.findAll()

        return res.json(feedbacks)
      } catch (error) {
        res
          .status(500)
          .json({ errors: [error.message ?? DEFAULT_ERROR_MESSAGE] })
      }
    })

    .get(`${INNER_API_V1_URL}/feedbacks/:id`, async (req, res) => {
      try {
        if (
          !req.enjoyer ||
          req.enjoyer.getDataValue('role') !== RoleEnum.admin
        ) {
          return res.status(401).json({ errors: ['Not Authorized'] })
        }

        const feedback = await feedbackRepository.findByPk(req.params.id)

        if (!feedback) {
          return res.status(404).json({ errors: ['Not Found'] })
        }

        return res.json(feedback)
      } catch (error) {
        res
          .status(500)
          .json({ errors: [error.message ?? DEFAULT_ERROR_MESSAGE] })
      }
    })

    .post(`${INNER_API_V1_URL}/feedbacks`, async (req, res) => {
      try {
        const feedback = await feedbackRepository.create(req.body, {
          fields: ['name', 'email', 'content'],
          validate: true
        })

        sendMessageByTelegram(
          process.env.TELEGRAM_BOT_TOKEN!,
          process.env.TELEGRAM_CHAT_ID!,
          '<b>Feedback is received.</b>\n\n' +
            `<b>Name:</b> ${req.body.name}\n` +
            `<b>Email:</b> ${req.body.email}\n` +
            `<b>Message:</b> ${req.body.content}\n\n` +
            `<i>"${getRandomArrayElement(T_800_PHRASES)}"</i>`
        ).catch((error) => console.error(error))

        return res.status(201).json(feedback)
      } catch (error) {
        res
          .status(500)
          .json({ errors: [error.message ?? DEFAULT_ERROR_MESSAGE] })
      }
    })
