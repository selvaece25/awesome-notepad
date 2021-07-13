const { isEmpty } = require('lodash');

const NotepadValidator = require('../validators/notepad');
const NotepadModel = require('../models/notepad');
const NotepadPresenter = require('../presenters/notepad');

const create = async (req, res, next) => {
  const { data } = req.body;
  const validator = new NotepadValidator('create');
  try {
    if (validator.validate(data || {}) && validator.value) {
      const responses = await NotepadModel.create({ description: validator.value.description });
      res.status(200);
      res.json(new NotepadPresenter().toCreateJson(responses));
    } else {
      res.status(400);
      res.json(validator.errors);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error.description);
    next();
  }
};

const update = async (req, res, next) => {
  let { data } = req.body;
  data = {
    ...req.params,
    ...data,
  };
  try {
    const validator = new NotepadValidator('update');
    if (validator.validate(data) && validator.value) {
      await NotepadModel.updateOne(
        { _id: validator.value.id },
        { $set: { description: validator.value.description } }
      );
      const noteDetails = await NotepadModel.findOne({ _id: validator.value.id });
      res.status(200);
      res.json(new NotepadPresenter().toUpdateJson(noteDetails));
    } else {
      res.status(400);
      res.json(validator.errors);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error.description);
    next();
  }
};

const fetchOne = async (req, res, next) => {
  const data = {
    ...req.params,
  };

  try {
    const validator = new NotepadValidator('fetchOne');
    if (validator.validate(data) && validator.value) {
      const note = await NotepadModel.findOne({ _id: validator.value.id });
      res.status(isEmpty(note) ? 404 : 200);
      res.json(new NotepadPresenter(note).toFetchOne());
    } else {
      res.status(400);
      res.json(validator.errors);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error.description);
    next();
  }
};

const fetchMany = async (req, res, next) => {
  const data = {
    ...req.query,
  };

  try {
    const validator = new NotepadValidator('fetchMany');
    if (validator.validate(data) && validator.value) {
      const notes = await NotepadModel.find({})
        .limit(validator.value.page_limit)
        .skip(validator.value.page_limit * (validator.value.page - 1));

      res.status(200);
      res.json(new NotepadPresenter(notes).toFetchMany());
    } else {
      res.status(400);
      res.json(validator.errors);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    next();
  }
};

module.exports = {
  create,
  update,
  fetchOne,
  fetchMany,
};
