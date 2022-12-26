const express = require('express');
const router = express.Router();
const offre_des = require('../services/offre_des');

/* GET offre_des */
router.get('/', async function(req, res, next) {
  try {
    res.json(await offre_des.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting offre_dess`, err.message);
    next(err);
  }
});

/* POST offre_des */
router.post('/', async function(req, res, next) {
  try {
    res.json(await offre_des.create(req.body));
  } catch (err) {
    console.error(`Error while creating offre_des`, err.message);
    next(err);
  }
});

/* PUT offre_des */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await offre_des.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating offre_des`, err.message);
    next(err);
  }
});

/* DELETE offre_des */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await offre_des.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting offre_des`, err.message);
    next(err);
  }
});

module.exports = router;