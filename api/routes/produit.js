const express = require('express');
const router = express.Router();
const produit = require('../services/produit');

/* GET produit */
router.get('/', async function(req, res, next) {
  try {
    res.json(await produit.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting produits`, err.message);
    next(err);
  }
});

/* POST produit */
router.post('/', async function(req, res, next) {
  try {
    res.json(await produit.create(req.body));
  } catch (err) {
    console.error(`Error while creating produit`, err.message);
    next(err);
  }
});

/* PUT produit */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await produit.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating produit`, err.message);
    next(err);
  }
});

/* DELETE produit */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await produit.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting produit`, err.message);
    next(err);
  }
});

module.exports = router;