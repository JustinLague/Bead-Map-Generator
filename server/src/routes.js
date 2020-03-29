// Import Controllers
const HelloWorld = require('./controllers/helloWorld.controller')

module.exports = app => {

  app.get('/helloWorld', HelloWorld.helloWorld)
}
