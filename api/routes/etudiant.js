const express = require('express');
const router = express.Router();
const etudiant = require('../services/etudiant');

/* GET etudiant */
router.get('/', async function(req, res, next) {
  try {
    res.json(await etudiant.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting etudiants`, err.message);
    next(err);
  }
});

/* POST etudiant */
router.post('/', async function(req, res, next) {
  try {
    res.json(await etudiant.create(req.body));
  } catch (err) {
    console.error(`Error while creating etudiant`, err.message);
    next(err);
  }
});

/* PUT etudiant */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await etudiant.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating etudiant`, err.message);
    next(err);
  }
});

/* DELETE etudiant */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await etudiant.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting etudiant`, err.message);
    next(err);
  }
});

module.exports = router;