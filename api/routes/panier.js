const express = require('express');
const router = express.Router();
const panier = require("../services/panier");

/* GET Panier */
router.get('/', async function(req, res, next) {
  try {
    res.json(await panier.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting Panier`, err.message);
    next(err);
  }
});

/* GET Panier spécifique*/
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await panier.getOne(req.params.id));
  } catch (err) {
    console.error(`Error while getting Panier`, err.message);
    next(err);
  }
});

/* POST Panier */
router.post('/', async function(req, res, next) {
  try {
    res.json(await panier.create(req.body));
  } catch (err) {
    console.error(`Error while creating Panier`, err.message);
    next(err);
  }
});

/* PUT Panier */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await panier.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating Panier`, err.message);
    next(err);
  }
});

/* DELETE Panier */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await panier.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting Panier`, err.message);
    next(err);
  }
});

/* POST Panier */
router.post('/addProduit', async function(req, res, next) {
  try {
    res.json(await panier.addProduit(req.body));
  } catch (err) {
    console.error(`Error while creating Panier`, err.message);
    next(err);
  }
});

module.exports = router;