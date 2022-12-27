const express = require('express');
const router = express.Router();
const nomVariable = require("../services/nomFichier");

/* GET nomTable */
router.get('/', async function(req, res, next) {
  try {
    res.json(await nomVariable.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting nomTable`, err.message);
    next(err);
  }
});

/* GET nomTable spécifique*/
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await nomVariable.getOne(req.params.id));
  } catch (err) {
    console.error(`Error while getting nomTable`, err.message);
    next(err);
  }
});

/* POST nomTable */
router.post('/', async function(req, res, next) {
  try {
    res.json(await nomVariable.create(req.body));
  } catch (err) {
    console.error(`Error while creating nomTable`, err.message);
    next(err);
  }
});

/* PUT nomTable */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await nomVariable.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating nomTable`, err.message);
    next(err);
  }
});

/* DELETE nomTable */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await nomVariable.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting nomTable`, err.message);
    next(err);
  }
});

module.exports = router;