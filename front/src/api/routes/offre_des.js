const express = require('express');
const router = express.Router();
const offre_des = require("../services/offre_des");

/* GET Offre_des */
router.get('/', async function(req, res, next) {
  try {
    res.json(await offre_des.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting Offre_des`, err.message);
    next(err);
  }
});

/* GET Offre_des spécifique*/
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await offre_des.getOne(req.params.id));
  } catch (err) {
    console.error(`Error while getting Offre_des`, err.message);
    next(err);
  }
});

/* POST Offre_des */
router.post('/', async function(req, res, next) {
  try {
    res.json(await offre_des.create(req.body));
  } catch (err) {
    console.error(`Error while creating Offre_des`, err.message);
    next(err);
  }
});

/* PUT Offre_des */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await offre_des.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating Offre_des`, err.message);
    next(err);
  }
});

/* DELETE Offre_des */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await offre_des.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting Offre_des`, err.message);
    next(err);
  }
});

module.exports = router;