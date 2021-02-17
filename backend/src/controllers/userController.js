class UserController {
  async index(req, res) {
    return res.send('Hello World');
  }
}

export default new UserController();
