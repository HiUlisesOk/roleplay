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

const CreateTopic = async (author, title) => {
	console.log(author, title)
	//Si falta algun dato devolvemos un error
	if (!title) throw new Error("Falta Title");
	if (!author) throw new Error("Falta Author");

	const user = await User.findOne({ where: { username: author } });
	if (!user) throw new Error("El autor no existe");

	const [topic, topicCreated] = await Topic.findOrCreate({
		where: {
			title: title,
			author: author,
			creation_date: generateDateTime(),
		},
	});
	console.log('topicCreated: ', topicCreated, topic)

	await user.addTopic(topic);

	const newTopic = { author, title }

	return newTopic;

}

module.exports = { CreateTopic }