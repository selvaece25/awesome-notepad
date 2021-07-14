const { isEmpty } = require('lodash');
const sinon = require('sinon');
const { assert } = require('chai');

const NotepadModel = require('../../../src/server/models/notepad');
const {
  emptyReq,
  createReq,
  emptyBodyReq,
  updateReq,
  fetchOneReq,
  fetchWithPageReq,
  fetchWithPageLimitReq,
} = require('../__mocks__/req');
const resMock = require('../__mocks__/res');
const table = require('../__mocks__/model');
const { create, update, fetchOne, fetchMany } = require('../../../src/server/controllers/notepad');

describe('Testing Controllers', () => {
  let modelMock;
  let statusSpy;
  let jsonSpy;
  let nextSpy;
  let res;
  beforeEach(() => {
    modelMock = sinon.mock(NotepadModel);
    res = new resMock();
    statusSpy = sinon.spy(res, 'status');
    jsonSpy = sinon.spy(res, 'json');
    nextSpy = sinon.spy();
  });
  afterEach(() => {
    modelMock.restore();
    statusSpy.restore();
    jsonSpy.restore();
  });

  test('Create with valid req params', async () => {
    modelMock.expects('create').withExactArgs(createReq.body.data).resolves();
    await create(createReq, res, nextSpy);
    modelMock.verify();
    assert.equal(statusSpy.calledOnceWith(201), true, 'Status Call');
    assert.equal(
      jsonSpy.calledOnceWith({
        msg: 'Created Successfully!!!',
      }),
      true,
      'Json Call'
    );
    assert.equal(nextSpy.notCalled, true, 'Next Call');
  });
  test('Create with invlvalid req params', async () => {
    modelMock.expects('create').never();
    create(emptyReq, res, nextSpy);
    modelMock.verify();
    assert.equal(statusSpy.notCalled, true, 'Status Call');
    assert.equal(jsonSpy.notCalled, true, 'Json Call');
    assert.equal(nextSpy.notCalled, true, 'Next Call');
  });
  test('Create with invlvalid req params with body', async () => {
    modelMock.expects('create').never();
    create(emptyBodyReq, res, nextSpy);
    modelMock.verify();
    assert.equal(statusSpy.calledOnceWith(400), true, 'Status Call');
    assert.equal(jsonSpy.calledOnce, true, 'Json Call');
    assert.equal(nextSpy.notCalled, true, 'Next Call');
  });

  test('Update with valid req params', async () => {
    modelMock
      .expects('updateOne')
      .withExactArgs(
        { _id: 'ffffffffffffffffffffffff' },
        { $set: { description: 'update description' } }
      )
      .resolves();
    await update(updateReq, res, nextSpy);
    modelMock.verify();
    assert.equal(statusSpy.calledOnceWith(200), true, 'Status Call');
    assert.equal(
      jsonSpy.calledOnceWith({
        msg: 'Updated Successfully!!!',
      }),
      true,
      'Json Call'
    );
    assert.equal(nextSpy.notCalled, true, 'Next Call');
  });
  test('Update with invlvalid req params with body', async () => {
    modelMock.expects('updateOne').never();
    create(emptyBodyReq, res, nextSpy);
    modelMock.verify();
    assert.equal(statusSpy.calledOnceWith(400), true, 'Status Call');
    assert.equal(jsonSpy.calledOnce, true, 'Json Call');
    assert.equal(nextSpy.notCalled, true, 'Next Call');
  });
  test('FetchOne with valid req params', async () => {
    modelMock
      .expects('findOne')
      .withExactArgs({ _id: 'ffffffffffffffffffffffff' })
      .resolves(table[0]);
    await fetchOne(fetchOneReq, res, nextSpy);
    modelMock.verify();
    assert.equal(statusSpy.calledOnceWith(200), true, 'Status Call');
    assert.equal(
      jsonSpy.calledOnceWith({
        data: {
          id: table[0]._id,
          description: table[0].description,
          created_at: table[0].created_at,
          updated_at: table[0].updated_at,
        },
      }),
      true,
      'Json Call'
    );
    assert.equal(nextSpy.notCalled, true, 'Next Call');
  });
  test('FetchOne with valid req params with no matching data', async () => {
    modelMock
      .expects('findOne')
      .withExactArgs({ _id: 'ffffffffffffffffffffffff' })
      .resolves(undefined);
    await fetchOne(fetchOneReq, res, nextSpy);
    modelMock.verify();
    assert.equal(statusSpy.calledOnceWith(404), true, 'Status Call');
    assert.equal(
      jsonSpy.calledOnceWith({
        msg: 'Not Found!!!',
      }),
      true,
      'Json Call'
    );
    assert.equal(nextSpy.notCalled, true, 'Next Call');
  });
});
