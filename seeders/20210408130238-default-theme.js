'use strict'

module.exports = {
  up: async ({ context: sequelize }) => {
    await sequelize.getQueryInterface().bulkInsert(
      'Themes',
      [
        {
          name: 'Default',
          preset: '{"primaryColor": "#353535"}',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },
  down: async ({ context: sequelize }) =>
    await sequelize.getQueryInterface().bulkDelete('Themes', null, {})
}
