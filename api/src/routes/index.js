const { Router } = require("express");
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const userRouter = require("./user/GetUser");
const CreateUserRouter = require('./user/CreateUser')
const CreateTopicRouter = require('./topic/CreateTopic')
const TopicRouter = require('./topic/GetTopics')
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use(userRouter);
router.use(CreateUserRouter);
router.use(TopicRouter);
router.use(CreateTopicRouter);




module.exports = router;
