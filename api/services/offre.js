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

async function create(offre){
  const result = await db.query(
    `INSERT INTO Offre (pk_idOffre, dateheure, adresseOffre, recupParEtu) VALUES (${offre.pk_idOffre}, ${offre.dateheure}, ${offre.adresseOffre}, ${offre.recupParEtu})`
  );

  let message = 'Error in creating offre';

  if (result.affectedRows) {
    message = 'offre created successfully';
  }

  return {message};
}

async function update(id, offre){
  const result = await db.query(
    `UPDATE Offre SET pk_idOffre = '${offre.pk_idOffre}', dateheure = '${offre.dateheure}', adresseOffre = '${offre.adresseOffre}', recupParEtu = '${offre.recupParEtu}' WHERE Offre.pk_idOffre = ${id};` 
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
  create,
  update,
  remove
}