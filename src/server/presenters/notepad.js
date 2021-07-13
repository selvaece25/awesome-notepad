const { isEmpty } = require('lodash');

const noteStructure = (noteDetails, truncateNote = false) => {
  const { _id: id, description, created_at, updated_at } = noteDetails;

  return {
    id,
    created_at,
    updated_at,
    description:
      truncateNote && description.length > 30 ? `${description.substring(0, 30)}...` : description,
  };
};

class NotepadPresenter {
  constructor(data = {}) {
    this.data = data;
  }

  toCreateJson(noteDetails) {
    return { data: noteStructure(noteDetails) };
  }

  toUpdateJson(noteDetails) {
    return { data: noteStructure(noteDetails) };
  }

  toFetchOne() {
    if (isEmpty(this.data)) {
      return {
        msg: 'Not Found!!!',
      };
    }

    return { data: noteStructure(this.data) };
  }

  toFetchMany() {
    return {
      data: this.data.map((note) => {
        return noteStructure(note, true);
      }),
    };
  }
}
module.exports = NotepadPresenter;
