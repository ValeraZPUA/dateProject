'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Photos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            userID: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            photoName: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Photos');
    }
};
