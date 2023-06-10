const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		"User",
		{
			ID: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			username: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			firstName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			lastName: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			profilePicture: {
				type: DataTypes.STRING,
				allowNull: true,
				defaultValue: "https://via.placeholder.com/500x500",
			},
			birthDate: {
				type: DataTypes.DATEONLY,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: true,
				defaultValue: "Aún no tenemos los pasos de esta receta",
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: null,
			},
			userScore: {
				type: DataTypes.INTEGER,
				allowNull: true,
				defaultValue: 0,
			},
			isAdmin: {
				type: DataTypes.BOOLEAN,
				allowNull: true,
				defaultValue: false,
			},
		},
		{
			paranoid: true,
		},
	);
};