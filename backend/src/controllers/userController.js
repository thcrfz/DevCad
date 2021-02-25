import userModel from "../presenter/userModel";
import developerModel from "../presenter/developerModel";

class UserController {
  async store(req, res) {
    try {
      const user = await userModel.create(req.body);

      const { id, email } = user;

      return res.json({ id, email });
    } catch (e) {
      return res.status(400).json();
    }
  }

  async index(req, res) {
    try {
      const users = await userModel.findAll({
        attributes: ["id", "email"],
        order: [
          ["id", "DESC"],
          [developerModel, "id", "DESC"],
        ],
        include: {
          model: developerModel,
          attributes: ["name", "email", "url"],
        },
      });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await userModel.findByPk(req.params.id);

      const { id, email } = user;

      return res.json({ id, email });
    } catch (e) {
      return res.js(null);
    }
  }
}

export default new UserController();
