const express = require('express');
const router = express.Router();
const administrateur = require('../services/administrateur');

/* GET administrateur */
router.get('/', async function(req, res, next) {
  try {
    res.json(await administrateur.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting administrateurs`, err.message);
    next(err);
  }
});

/* POST administrateur */
router.post('/', async function(req, res, next) {
  try {
    res.json(await administrateur.create(req.body));
  } catch (err) {
    console.error(`Error while creating administrateur`, err.message);
    next(err);
  }
});

/* PUT administrateur */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await administrateur.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating administrateur`, err.message);
    next(err);
  }
});

/* DELETE administrateur */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await administrateur.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting administrateur`, err.message);
    next(err);
  }
});

module.exports = router;