import developerModel from '../presenter/developerModel';
import languageModel from '../presenter/languageModel';

class DeveloperController {
  async store(req, res) {
    try {
      const developer = await developerModel.create(req.body);

      return res.json(developer);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map(((err) => err.message)) });
    }
  }

  async index(req, res) {
    try {
      const developers = await developerModel.findAll({
        attributes: ['id', 'name', 'email', 'age', 'url'],
        order: [['id', 'DESC'], [languageModel, 'id', 'DESC']],
        include: {
          model: languageModel,
          attributes: ['name'],
        },
      });
      return res.json(developers);
    } catch (e) {
      return res.status(404).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json({ errors: ['Missing ID.'] });

      const developer = await developerModel.findByPk(id, {
        attributes: ['id', 'name', 'email', 'age', 'url'],
        order: [['id', 'DESC'], [languageModel, 'id', 'DESC']],
        include: {
          model: languageModel,
          attributes: ['name'],
        },
      });

      if (!developer) return res.status(400).json({ errors: ['Developer not exists.'] });

      return res.json(developer);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json({ errors: ['Missing ID'] });

      const developer = await developerModel.findByPk(id);

      if (!developer) return res.status(400).json({ errors: ['Developer not exist.'] });

      const updateDeveloper = await developer.update(req.body);

      return res.json(updateDeveloper);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json({ errors: ['Missing ID'] });

      const developer = await developerModel.findByPk(id);

      if (!developer) return res.status(400).json({ errors: ['Developer not exist.'] });

      await developer.destroy();

      return res.json({ deleted: true });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new DeveloperController();
