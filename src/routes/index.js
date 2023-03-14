const { Router } = require("express");

const tagsRouter = require("./tags.routes")
const usersRouter = require("./users.routes");
const notesRouter = require("./notes.routes");
const sessionsRoutes = require("./sessions.routes");

const routes = Router();

routes.use("/tags" , tagsRouter)
routes.use("/users" , usersRouter);
routes.use("/sessions" , sessionsRoutes);
routes.use("/notes" , notesRouter);

module.exports = routes;