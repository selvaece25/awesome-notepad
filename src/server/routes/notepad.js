const express = require('express');

const { create, update, fetchOne, fetchMany } = require('../controllers/notepad');

const router = express.Router();

router.post('/', create);
router.put('/:id', update);
router.get('/:id', fetchOne);
router.get('/', fetchMany);

module.exports = router;
