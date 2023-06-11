// /// =========================================================================== ///
// /// =============================== CONTROLLERS POST ================================ ///
// /// =========================================================================== ///
//         /| ________________
// O|===|* > ________________/ 
//         \|  

const { Op } = require("sequelize");
const { User, Post, Topic } = require("../db");
const { generateDateOnly, generateDateTime } = require('../utils/date')
const bcrypt = require('bcrypt');


const createPost = async (content, authorID, topicID,) => {
	console.log(content, authorID, topicID)
	//Si falta algun dato devolvemos un error
	if (!content) throw new Error("Falta content");
	if (!authorID) throw new Error("Falta Author");
	if (!topicID) throw new Error("Falta Topic");

	const user = await User.findOne({ where: { authorID: authorID } });
	if (!user) throw new Error("El autor no existe");

	const topic = await Topic.findOne({ where: { topicID: topicID } });
	if (!topic) throw new Error("El topic no existe");
	if (!topic.ID) throw new Error("El autor no existe");

	const [post, postCreated] = await Post.findOrCreate({
		where: {
			content: content,
			author: user.username,
			authorID: user.ID,
			topicID: topic.ID
		},
	});
	console.log('topicCreated: ', postCreated, post)

	await user.addTopic(topic);
	await user.addPost(post);

	const newPost = { author: user.username, content: content, topicID: topic.ID }

	return newPost;

}

module.exports = { createPost }