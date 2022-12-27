const express = require('express');
const router = express.Router();
const produit = require("../services/produit");

/* GET Produit */
router.get('/', async function(req, res, next) {
  try {
    res.json(await produit.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting Produit`, err.message);
    next(err);
  }
});

/* GET Produit spécifique*/
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await produit.getOne(req.params.id));
  } catch (err) {
    console.error(`Error while getting Produit`, err.message);
    next(err);
  }
});

/* POST Produit */
router.post('/', async function(req, res, next) {
  try {
    res.json(await produit.create(req.body));
  } catch (err) {
    console.error(`Error while creating Produit`, err.message);
    next(err);
  }
});

/* PUT Produit */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await produit.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating Produit`, err.message);
    next(err);
  }
});

/* DELETE Produit */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await produit.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting Produit`, err.message);
    next(err);
  }
});

module.exports = router;