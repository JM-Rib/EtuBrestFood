const express = require('express');
const router = express.Router();
const offre = require("../services/offre");

/* GET Offre */
router.get('/', async function(req, res, next) {
  try {
    res.json(await offre.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting Offre`, err.message);
    next(err);
  }
});

/* GET Offre spécifique*/
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await offre.getOne(req.params.id));
  } catch (err) {
    console.error(`Error while getting Offre`, err.message);
    next(err);
  }
});

/* POST Offre */
router.post('/', async function(req, res, next) {
  try {
    res.json(await offre.create(req.body));
  } catch (err) {
    console.error(`Error while creating Offre`, err.message);
    next(err);
  }
});

/* PUT Offre */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await offre.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating Offre`, err.message);
    next(err);
  }
});

/* DELETE Offre */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await offre.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting Offre`, err.message);
    next(err);
  }
});

module.exports = router;