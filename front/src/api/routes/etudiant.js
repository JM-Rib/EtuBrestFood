const express = require('express');
const router = express.Router();
const etudiant = require("../services/etudiant");
const compte = require("../services/compte");

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

/* POST new compte Etudiant */
router.post('/new', async function(req, res, next) {
  var date = new Date();
  req.body.dateCreation = date.getUTCFullYear() + '-' + date.getUTCMonth() + 1  + '-' + date.getUTCDate();
  req.body.desactive = 0;
  req.body.supprimme = 0;
  
  try {
    await compte.create(req.body);
  } catch (err) {
    console.error(`Error while creating compte Etudiant`, err.message);
    next(err);
  }

  reponse = await compte.getId(req.body.email);
  req.body.fk_idCompte = reponse.data[0].pk_idCompte;

  try {
    res.json(await etudiant.create(req.body));
  } catch (err) {
    console.error(`Error while creating compte Etudiant`, err.message);
    next(err);
  }
});

/* GET nom & prenom d'un Etudiant*/
router.get('/nom/:id', async function(req, res, next) {
  try {
    res.json(await etudiant.getNom(req.params.id));
  } catch (err) {
    console.error(`Error while getting Etudiant nom & prenom`, err.message);
    next(err);
  }
});

/* GET Etudiant spécifique*/
router.get('/getOffres/:id', async function(req, res, next) {
  try {
    res.json(await etudiant.getOffres(req.params.id));
  } catch (err) {
    console.error(`Error while getting offres of Etudiant`, err.message);
    next(err);
  }
});


module.exports = router;