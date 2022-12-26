const express = require('express');
const router = express.Router();
const compte = require('../services/compte');

/* GET compte */
router.get('/', async function(req, res, next) {
  try {
    res.json(await compte.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting comptes`, err.message);
    next(err);
  }
});

/* POST compte */
router.post('/', async function(req, res, next) {
  try {
    res.json(await compte.create(req.body));
  } catch (err) {
    console.error(`Error while creating compte`, err.message);
    next(err);
  }
});

/* PUT compte */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await compte.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating compte`, err.message);
    next(err);
  }
});

/* DELETE compte */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await compte.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting compte`, err.message);
    next(err);
  }
});

module.exports = router;