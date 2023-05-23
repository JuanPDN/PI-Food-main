const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: true
    },
    healtScore: {
      type: DataTypes.STRING,
      allowNull: true
    },
    stepToStep: {
      type: DataTypes.STRING,
      allowNull: true
    },
    diet:{
      type: DataTypes.STRING,
      allowNull: false
    }
  },{ timestamps: false });
};
