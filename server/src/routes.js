// Import Controllers
const AuthController = require("./controllers/auth.controller");

//Import Policies
const AuthPolicies = require("./policies/auth");

module.exports = (app) => {
  // Auth
  app.post("/register", AuthController.register);
  app.post("/login", AuthController.login);

  //Test
  //app.get("/helloWorld", AuthPolicies.verifyToken, HelloWorld.helloWorld);
};
