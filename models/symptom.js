const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Symptom extends Model {}
/*symptom	
id	INT NOT NULL PRIMARY KEY
name	STRING NOT NULL
tag_id	INT NULL OK FOREIGN KEY tag.id 
Symptom_id	INT NULL OK FOREIGN KEY Symptom.id*/
Symptom.init(
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

        tag_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references:{
              model: 'tag',
              key: 'id',  
            }
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
        modelName: 'symptom'
    }
);

module.exports = Symptom;





