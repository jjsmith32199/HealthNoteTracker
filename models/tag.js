

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tag extends Model {}
/*
tag	
id	INT NOT NULL PRIMARY KEY
name	STRING NOT NULL
doctor_id	INT NULL OK FOREIGN KEY doctor.id
 */
Tag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          doctor_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references:{
              model: 'doctor',
              key: 'id',  
            }

        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tag'
    }
);

module.exports = Tag;
