const express = require('express');
const router = express.Router();
const concerne = require('../services/concerne');

/* GET concerne */
router.get('/', async function(req, res, next) {
  try {
    res.json(await concerne.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting concernes`, err.message);
    next(err);
  }
});

/* POST concerne */
router.post('/', async function(req, res, next) {
  try {
    res.json(await concerne.create(req.body));
  } catch (err) {
    console.error(`Error while creating concerne`, err.message);
    next(err);
  }
});

/* PUT concerne */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await concerne.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating concerne`, err.message);
    next(err);
  }
});

/* DELETE concerne */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await concerne.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting concerne`, err.message);
    next(err);
  }
});

module.exports = router;