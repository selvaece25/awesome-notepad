const emptyReq = {};

const emptyBodyReq = {
  body: {},
};

const createReq = {
  body: {
    data: {
      description: 'create description',
    },
  },
};

const updateReq = {
  params: {
    id: 'ffffffffffffffffffffffff',
  },
  body: {
    data: {
      description: 'update description',
    },
  },
};

const fetchOneReq = {
  params: {
    id: 'ffffffffffffffffffffffff',
  },
};

const fetchWithPageReq = {
  query: {
    page: 10,
  },
};

const fetchWithPageLimitReq = {
  query: {
    page_limit: 15,
  },
};

module.exports = {
  emptyReq,
  emptyBodyReq,
  createReq,
  updateReq,
  fetchOneReq,
  fetchWithPageReq,
  fetchWithPageLimitReq,
};
