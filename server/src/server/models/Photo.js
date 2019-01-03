
module.exports = (sequelize, DataTypes) => {
    const Photo = sequelize.define('Photo', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        photoName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });

Photo.associate = function(models) {
    Photo.belongsToMany(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        through: 'ChannelUser'
    });
};

    return Photo;
};


