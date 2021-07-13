const Joi = require('joi');
const { isEmpty } = require('lodash');

class NotepadValidator {
  constructor(type) {
    this.type = type;
  }

  validate(data) {
    let schema = null;

    if (this.type !== 'fetchMany' && isEmpty(data)) {
      this.errors = [{ message: 'Empty Request Object.' }];

      return;
    }
    switch (this.type) {
      case 'create': {
        schema = NotepadValidator.createSchema();
        break;
      }
      case 'update': {
        schema = NotepadValidator.updateSchema();
        break;
      }
      case 'fetchOne': {
        schema = NotepadValidator.fetchOneSchema();
        break;
      }
      case 'fetchMany': {
        schema = NotepadValidator.fetchManySchema();
        break;
      }
      default:
        console.log(`Invalid operation ${this.type}`);
        break;
    }

    if (!schema) {
      this.errors = [{ message: 'Invalid Operation.' }];

      return;
    }
    const { error, value } = schema.validate(data);
    if (error) {
      this.value = {};
      this.errors = error;

      return false;
    }
    this.value = value;
    this.errors = [];

    return true;
  }
  static createSchema() {
    return Joi.object({
      description: Joi.string().required(),
    });
  }
  static updateSchema() {
    return Joi.object({
      id: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/, 'Invalid Id')
        .required(),
      description: Joi.string().required(),
    });
  }
  static fetchOneSchema() {
    return Joi.object({
      id: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/, 'Invalid Id')
        .required(),
    });
  }
  static fetchManySchema() {
    return Joi.object({
      page: Joi.number().integer().default(1),
      page_limit: Joi.number().integer().default(25),
    });
  }
}

module.exports = NotepadValidator;
