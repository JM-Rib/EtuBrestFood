const express = require('express');
const router = express.Router();
const annonce = require('../services/annonce');

/* GET annonce */
router.get('/', async function(req, res, next) {
  try {
    res.json(await annonce.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting annonces`, err.message);
    next(err);
  }
});

/* POST annonce */
router.post('/', async function(req, res, next) {
  try {
    res.json(await annonce.create(req.body));
  } catch (err) {
    console.error(`Error while creating annonce`, err.message);
    next(err);
  }
});

/* PUT annonce */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await annonce.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating annonce`, err.message);
    next(err);
  }
});

/* DELETE annonce */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await annonce.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting annonce`, err.message);
    next(err);
  }
});

module.exports = router;