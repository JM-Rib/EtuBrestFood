const express = require('express');
const router = express.Router();
const sinscrit = require("../services/s'inscrit");

/* GET S'inscrit */
router.get('/', async function(req, res, next) {
  try {
    res.json(await sinscrit.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting S'inscrit`, err.message);
    next(err);
  }
});

/* GET S'inscrit spécifique*/
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await sinscrit.getOne(req.params.id));
  } catch (err) {
    console.error(`Error while getting S'inscrit`, err.message);
    next(err);
  }
});

/* POST S'inscrit */
router.post('/', async function(req, res, next) {
  try {
    res.json(await sinscrit.create(req.body));
  } catch (err) {
    console.error(`Error while creating S'inscrit`, err.message);
    next(err);
  }
});

/* PUT S'inscrit */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await sinscrit.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating S'inscrit`, err.message);
    next(err);
  }
});

/* DELETE S'inscrit */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await sinscrit.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting S'inscrit`, err.message);
    next(err);
  }
});

module.exports = router;