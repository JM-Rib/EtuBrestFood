const express = require('express');
const router = express.Router();
const partenaire = require('../services/partenaire');

/* GET partenaire */
router.get('/', async function(req, res, next) {
  try {
    res.json(await partenaire.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting partenaires`, err.message);
    next(err);
  }
});

/* POST partenaire */
router.post('/', async function(req, res, next) {
  try {
    res.json(await partenaire.create(req.body));
  } catch (err) {
    console.error(`Error while creating partenaire`, err.message);
    next(err);
  }
});

/* PUT partenaire */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await partenaire.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating partenaire`, err.message);
    next(err);
  }
});

/* DELETE partenaire */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await partenaire.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting partenaire`, err.message);
    next(err);
  }
});

module.exports = router;