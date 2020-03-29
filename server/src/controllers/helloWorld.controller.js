class HelloWorldController {
  async helloWorld (req, res) {
    res.send({messages: "HelloWorld"})
  }
}

module.exports = new HelloWorldController()
