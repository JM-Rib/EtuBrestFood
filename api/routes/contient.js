const express = require('express');
const router = express.Router();
const contient = require('../services/contient');

/* GET contient */
router.get('/', async function(req, res, next) {
  try {
    res.json(await contient.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting contients`, err.message);
    next(err);
  }
});

/* POST contient */
router.post('/', async function(req, res, next) {
  try {
    res.json(await contient.create(req.body));
  } catch (err) {
    console.error(`Error while creating contient`, err.message);
    next(err);
  }
});

/* PUT contient */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await contient.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating contient`, err.message);
    next(err);
  }
});

/* DELETE contient */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await contient.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting contient`, err.message);
    next(err);
  }
});

module.exports = router;