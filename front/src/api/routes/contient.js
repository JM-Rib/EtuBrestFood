const express = require('express');
const router = express.Router();
const contient = require("../services/contient");

/* GET Contient */
router.get('/', async function(req, res, next) {
  try {
    res.json(await contient.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting Contient`, err.message);
    next(err);
  }
});

/* GET Contient spécifique*/
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await contient.getOne(req.params.id));
  } catch (err) {
    console.error(`Error while getting Contient`, err.message);
    next(err);
  }
});

/* POST Contient */
router.post('/', async function(req, res, next) {
  try {
    res.json(await contient.create(req.body));
  } catch (err) {
    console.error(`Error while creating Contient`, err.message);
    next(err);
  }
});

/* PUT Contient */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await contient.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating Contient`, err.message);
    next(err);
  }
});

/* DELETE Contient */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await contient.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting Contient`, err.message);
    next(err);
  }
});

module.exports = router;