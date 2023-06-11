// /// =========================================================================== ///
// /// =============================== CONTROLLERS USERS ================================ ///
// /// =========================================================================== ///
//         /| ________________
// O|===|* > ________________/ 
//         \|  

const { Op } = require("sequelize");
const { User, Post, Topic } = require("../db");
const { generateDateOnly, generateDateTime } = require('../utils/date')
const bcrypt = require('bcrypt');


/// <=============== controller getAllRecipes ===============>
async function getAllTopicsFromDb() {
	// Guardamos los datos de la API en data
	const topics = await Topic.findAll();
	//Si la funcion no recibe nada, devuelve un error.
	if (!topics) throw new Error("No se encontraron Topics");
	return topics;
}


/// <=============== controller Create Topics ===============>
const CreateTopic = async (author, title, authorID) => {
	console.log(author, title)
	//Si falta algun dato devolvemos un error
	if (!title) throw new Error("Falta Title");
	if (!author) throw new Error("Falta Author");
	if (!authorID) throw new Error("Falta AuthorID");

	const user = await User.findOne({ where: { authorID: authorID } });
	if (!user) throw new Error("El autor no existe");
	if (!user.ID) throw new Error("El autor no existe");

	const [topic, topicCreated] = await Topic.findOrCreate({
		where: {
			title: title,
			author: author,
			authorID: user.ID,

		},
	});
	console.log('topicCreated: ', topicCreated, topic)

	await user.addTopic(topic);

	const newTopic = { author, title, }

	return newTopic;

}

module.exports = {
	CreateTopic,
	getAllTopicsFromDb
}