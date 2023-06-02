const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('recipe_diets', {
        
        recipeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'recipes',
                key: 'id',
            },
        },
        dietId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'diets',
                key: 'id',
            },
        },
    }, { timestamps: false });
};