const express = require('express');
const router = express.Router();
const partenaire = require("../services/partenaire");

/* GET Partenaire */
router.get('/', async function(req, res, next) {
  try {
    res.json(await partenaire.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting Partenaire`, err.message);
    next(err);
  }
});

/* GET Partenaire spécifique*/
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await partenaire.getOne(req.params.id));
  } catch (err) {
    console.error(`Error while getting Partenaire`, err.message);
    next(err);
  }
});

/* POST Partenaire */
router.post('/', async function(req, res, next) {
  try {
    res.json(await partenaire.create(req.body));
  } catch (err) {
    console.error(`Error while creating Partenaire`, err.message);
    next(err);
  }
});

/* PUT Partenaire */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await partenaire.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating Partenaire`, err.message);
    next(err);
  }
});

/* DELETE Partenaire */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await partenaire.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting Partenaire`, err.message);
    next(err);
  }
});

module.exports = router;