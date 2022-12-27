const express = require('express');
const router = express.Router();
const concerne = require("../services/concerne");

/* GET Concerne */
router.get('/', async function(req, res, next) {
  try {
    res.json(await concerne.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting Concerne`, err.message);
    next(err);
  }
});

/* GET Concerne spécifique*/
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await concerne.getOne(req.params.id));
  } catch (err) {
    console.error(`Error while getting Concerne`, err.message);
    next(err);
  }
});

/* POST Concerne */
router.post('/', async function(req, res, next) {
  try {
    res.json(await concerne.create(req.body));
  } catch (err) {
    console.error(`Error while creating Concerne`, err.message);
    next(err);
  }
});

/* PUT Concerne */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await concerne.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating Concerne`, err.message);
    next(err);
  }
});

/* DELETE Concerne */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await concerne.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting Concerne`, err.message);
    next(err);
  }
});

module.exports = router;