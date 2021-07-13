const mongoose = require('mongoose');

const { Model, Schema } = mongoose;

const schemaOptions = {
  versionKey: false,
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
};

const notepadSchema = new Schema(
  {
    description: {
      type: String,
    },
  },
  schemaOptions
);

class NotepadModel extends Model {}

module.exports = mongoose.model(NotepadModel, notepadSchema, 'notepad');
