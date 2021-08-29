const express = require("express");
const UserController = require("./controllers/UserController");
const routes = new express.Router();

routes.post("/register", UserController.register);
routes.get("/", (req, res) => {
  res.send("Usuário criado");
});
module.exports = routes;
