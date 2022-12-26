const express = require('express');
const router = express.Router();
const offre = require('../services/offre');

/* GET offre */
router.get('/', async function(req, res, next) {
  try {
    res.json(await offre.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting offres`, err.message);
    next(err);
  }
});

/* POST offre */
router.post('/', async function(req, res, next) {
  try {
    res.json(await offre.create(req.body));
  } catch (err) {
    console.error(`Error while creating offre`, err.message);
    next(err);
  }
});

/* PUT offre */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await offre.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating offre`, err.message);
    next(err);
  }
});

/* DELETE offre */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await offre.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting offre`, err.message);
    next(err);
  }
});

module.exports = router;