const express = require('express');
const router = express.Router();
const panier = require('../services/panier');

/* GET panier */
router.get('/', async function(req, res, next) {
  try {
    res.json(await panier.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting paniers`, err.message);
    next(err);
  }
});

/* POST panier */
router.post('/', async function(req, res, next) {
  try {
    res.json(await panier.create(req.body));
  } catch (err) {
    console.error(`Error while creating panier`, err.message);
    next(err);
  }
});

/* PUT panier */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await panier.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating panier`, err.message);
    next(err);
  }
});

/* DELETE panier */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await panier.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting panier`, err.message);
    next(err);
  }
});

module.exports = router;