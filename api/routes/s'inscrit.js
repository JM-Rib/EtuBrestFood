const express = require('express');
const router = express.Router();
const s'inscrit = require('../services/s'inscrit');

/* GET s'inscrit */
router.get('/', async function(req, res, next) {
  try {
    res.json(await s'inscrit.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting s'inscrits`, err.message);
    next(err);
  }
});

/* POST s'inscrit */
router.post('/', async function(req, res, next) {
  try {
    res.json(await s'inscrit.create(req.body));
  } catch (err) {
    console.error(`Error while creating s'inscrit`, err.message);
    next(err);
  }
});

/* PUT s'inscrit */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await s'inscrit.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating s'inscrit`, err.message);
    next(err);
  }
});

/* DELETE s'inscrit */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await s'inscrit.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting s'inscrit`, err.message);
    next(err);
  }
});

module.exports = router;