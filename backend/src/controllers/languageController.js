import languageModel from '../presenter/languageModel';

class LanguageController {
  async store(req, res) {
    try {
      const language = await languageModel.create(req.body);
      return res.json(language);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map(((err) => err.message)) });
    }
  }
}
export default new LanguageController();
