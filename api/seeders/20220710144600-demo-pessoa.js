'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Pessoas', [{
				nome: 'Ana Souza',
				ativo: true,
				email: 'ana@teste.com',
				role: 'estudante',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Marcos Cintra',
				ativo: true,
				email: 'marcos@teste.com',
				role: 'estudante',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Felipe Cardoso',
				ativo: true,
				email: 'felipe@teste.com',
				role: 'estudante',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Sandra Gomes',
				ativo: false,
				email: 'sandra@teste.com',
				role: 'estudante',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Paula Morais',
				ativo: true,
				email: 'paula@teste.com',
				role: 'docente',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Sergio Lopes',
				ativo: true,
				email: 'sergio@teste.com',
				role: 'docente',
				createdAt: new Date(),
				updatedAt: new Date()
			}], {});
     },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pessoas', null, {});
     
  }
};
