const express = require('express');
const router = express.Router();
const administrateur = require("../services/administrateur");

/* GET Administrateur */
router.get('/', async function(req, res, next) {
  try {
    res.json(await administrateur.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting Administrateur`, err.message);
    next(err);
  }
});

/* GET Administrateur spécifique*/
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await administrateur.getOne(req.params.id));
  } catch (err) {
    console.error(`Error while getting Administrateur`, err.message);
    next(err);
  }
});

/* POST Administrateur */
router.post('/', async function(req, res, next) {
  try {
    res.json(await administrateur.create(req.body));
  } catch (err) {
    console.error(`Error while creating Administrateur`, err.message);
    next(err);
  }
});

/* PUT Administrateur */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await administrateur.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating Administrateur`, err.message);
    next(err);
  }
});

/* DELETE Administrateur */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await administrateur.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting Administrateur`, err.message);
    next(err);
  }
});

module.exports = router;