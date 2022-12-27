const express = require('express');
const router = express.Router();
const etudiant = require("../services/etudiant");

/* GET Etudiant */
router.get('/', async function(req, res, next) {
  try {
    res.json(await etudiant.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting Etudiant`, err.message);
    next(err);
  }
});

/* GET Etudiant spécifique*/
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await etudiant.getOne(req.params.id));
  } catch (err) {
    console.error(`Error while getting Etudiant`, err.message);
    next(err);
  }
});

/* POST Etudiant */
router.post('/', async function(req, res, next) {
  try {
    res.json(await etudiant.create(req.body));
  } catch (err) {
    console.error(`Error while creating Etudiant`, err.message);
    next(err);
  }
});

/* PUT Etudiant */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await etudiant.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating Etudiant`, err.message);
    next(err);
  }
});

/* DELETE Etudiant */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await etudiant.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting Etudiant`, err.message);
    next(err);
  }
});

module.exports = router;