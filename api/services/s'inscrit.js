const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM S'inscrit LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function create(sinscrit){
  const result = await db.query(
    `INSERT INTO S'inscrit (fk_idEtudiants, fk_idAnnonce) VALUES (${sinscrit.fk_idEtudiants}, ${sinscrit.fk_idAnnonce})`
  );

  let message = 'Error in creating sinscrit';

  if (result.affectedRows) {
    message = 'sinscrit created successfully';
  }

  return {message};
}

async function update(id, sinscrit){
  const result = await db.query(
    `UPDATE S'inscrit SET fk_idEtudiants = '${sinscrit.fk_idEtudiants}', fk_idAnnonce = '${sinscrit.fk_idAnnonce}' WHERE S'inscrit.fk_idEtudiants = ${id};` 
  );

  let message = 'Error in updating sinscrit';

  if (result.affectedRows) {
    message = 'sinscrit updated successfully';
  }

  return {message};
}

async function remove(id){
  const result = await db.query(
    `DELETE FROM S'inscrit WHERE fk_idEtudiants=${id}`
  );

  let message = 'Error in deleting sinscrit';

  if (result.affectedRows) {
    message = 'sinscrit deleted successfully';
  }

  return {message};
}

module.exports = {
  getMultiple,
  create,
  update,
  remove
}