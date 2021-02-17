import jwt from 'jsonwebtoken';
import userModel from '../presenter/userModel';

class SessionController {
  async store(req, res) {
    try {
      const { email = '', password = '' } = req.body;

      const user = await userModel.findOne({ where: { email } });

      if (!user) return res.status(401).json({ errors: ['User not exist.'] });
      if (!(await user.passwordIsValid(password))) return res.status(401).json({ errors: ['Invalid password'] });

      const { id } = user;
      const token = jwt.sign({ id }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.json({ user, token });
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new SessionController();
