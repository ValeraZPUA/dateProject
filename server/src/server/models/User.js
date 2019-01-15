'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        notEmpty: true
      }
    },
    profilePicture: {
      type: DataTypes.STRING,
      allowNull: true
    },
      // status: {
      //   type: DataTypes.STRING,
      //   allowNull: true
      // },
      isActive: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true
      },
      isBanned: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: false,
      validate: {
        notEmpty: true
      }
    },
    intention: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        notEmpty: true
      }
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "user",
      allowNull: false,
      unique: false,
      validate: {
        notEmpty: true
      }
    }
  });

  return User;
};
