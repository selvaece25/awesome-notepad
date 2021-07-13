const { isEmpty } = require('lodash');

class NotepadPresenter {
  constructor(data = {}) {
    this.data = data;
  }

  toCreateJson() {
    return {
      msg: 'Created Successfully!!!',
    };
  }

  toUpdateJson() {
    return {
      msg: 'Updated Successfully!!!',
    };
  }

  toFetchOne() {
    if (isEmpty(this.data)) {
      return {
        msg: 'Not Found!!!',
      };
    }

    return {
      data: {
        id: this.data._id,
        description: this.data.description,
        created_at: this.data.created_at,
        updated_at: this.data.created_at,
      },
    };
  }

  toFetchMany() {
    return {
      data: this.data.map((note) => ({
        id: note._id,
        description:
          note.description.length > 30
            ? `${note.description.substring(0, 26)}...`
            : note.description,
        created_at: note.created_at,
        updated_at: note.created_at,
      })),
    };
  }
}
module.exports = NotepadPresenter;
