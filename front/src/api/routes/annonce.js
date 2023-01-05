const express = require('express');
const router = express.Router();
const annonce = require("../services/annonce");

/* GET Annonce */
router.get('/', async function(req, res, next) {
  try {
    res.json(await annonce.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting Annonce`, err.message);
    next(err);
  }
});

/* GET Annonce spécifique*/
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await annonce.getOne(req.params.id));
  } catch (err) {
    console.error(`Error while getting Annonce`, err.message);
    next(err);
  }
});

/* POST Annonce */
router.post('/', async function(req, res, next) {
  try {
    res.json(await annonce.create(req.body));
  } catch (err) {
    console.error(`Error while creating Annonce`, err.message);
    next(err);
  }
});

/* PUT Annonce */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await annonce.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating Annonce`, err.message);
    next(err);
  }
});

/* DELETE Annonce */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await annonce.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting Annonce`, err.message);
    next(err);
  }
});

/* GET Annonce à partir d'un id de panier */
router.get('/duPanier/:id', async function(req, res, next) {
  try {
    res.json(await annonce.getDuPanier(req.params.id));
  } catch (err) {
    console.error(`Error while getting Annonce from specific panier`, err.message);
    next(err);
  }
});

module.exports = router;