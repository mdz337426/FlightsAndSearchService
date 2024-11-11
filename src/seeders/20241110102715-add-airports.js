'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports', [
      {
        name:"Abc International Airport",
        cityId : 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"Bcd International Airport",
        cityId : 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"Cde International Airport",
        cityId : 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"Def International Airport",
        cityId : 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"Efg International Airport",
        cityId : 17,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
