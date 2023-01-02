const express = require('express');
const router = express.Router();
const partenaire = require("../services/partenaire");
const compte = require("../services/compte");

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

/* POST new compte Partenaire */
router.post('/new', async function(req, res, next) {
  try {
    await compte.create(req.body);
  } catch (err) {
    console.error(`Error while creating compte Partenaire`, err.message);
    next(err);
  }

  reponse = await compte.getId(req.body.email);
  req.body.fk_idCompte = reponse.data[0].pk_idCompte;

  try {
    res.json(await partenaire.create(req.body));
  } catch (err) {
    console.error(`Error while creating compte Partenaire`, err.message);
    next(err);
  }
});

/* GET nom & prenom d'un Partenaire*/
router.get('/nom/:id', async function(req, res, next) {
  try {
    res.json(await partenaire.getNom(req.params.id));
  } catch (err) {
    console.error(`Error while getting Partenaire nom & prenom`, err.message);
    next(err);
  }
});

/* POST nouveauDon d'un partenaire */
router.post('/nouveauDon', async function(req, res, next) {
  try {
    res.json(await partenaire.nouveauDon(req.body));
  } catch (err) {
    console.error(`Error while creating Panier`, err.message);
    next(err);
  }
});

/* GET Dons */
router.get('/afficheDons/:id', async function(req, res, next) {
  try {
    res.json(await partenaire.afficheDons(req.params.id));
  } catch (err) {
    console.error(`Error while getting Partenaire`, err.message);
    next(err);
  }
});

module.exports = router;