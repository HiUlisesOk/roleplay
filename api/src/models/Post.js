const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		"Post",
		{
			ID: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			content: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			author: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			authorID: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			topicID: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},

		},
		{
			paranoid: true,
		},
	);
};