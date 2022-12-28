const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM Offre LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function getOne(id){
  const rows = await db.query(
    `SELECT * FROM Offre WHERE pk_idOffre=${id}`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

async function create(offre){
  const result = await db.query(
    `INSERT INTO Offre (pk_idOffre, dateheure, recupParEtu, fk_idEtudiant, fk_idPanier) VALUES (${offre.pk_idOffre}, ${offre.dateheure}, ${offre.recupParEtu}, ${offre.fk_idEtudiant}, ${offre.fk_idPanier})`
  );

  let message = 'Error in creating offre';

  if (result.affectedRows) {
    message = 'offre created successfully';
  }

  return {message};
}

async function update(id, offre){
  const result = await db.query(
    `UPDATE Offre SET pk_idOffre = '${offre.pk_idOffre}', dateheure = '${offre.dateheure}', recupParEtu = '${offre.recupParEtu}', fk_idEtudiant = '${offre.fk_idEtudiant}', fk_idPanier = '${offre.fk_idPanier}' WHERE Offre.pk_idOffre = ${id};` 
  );

  let message = 'Error in updating offre';

  if (result.affectedRows) {
    message = 'offre updated successfully';
  }

  return {message};
}

async function remove(id){
  const result = await db.query(
    `DELETE FROM Offre WHERE pk_idOffre=${id}`
  );

  let message = 'Error in deleting offre';

  if (result.affectedRows) {
    message = 'offre deleted successfully';
  }

  return {message};
}

module.exports = {
  getMultiple,
  getOne,
  create,
  update,
  remove
}