const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue:DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'https://jappi.com.co/wp-content/uploads/2020/08/Clasificacion-de-los-alimentos-imagen-destacada.jpg'
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: true
    },
    healthScore: {
      type: DataTypes.STRING,
      allowNull: true
    },
    stepToStep: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    }
  },{ timestamps: false });
};
