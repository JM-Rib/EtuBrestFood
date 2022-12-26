const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM Concerne LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function create(concerne){
  const result = await db.query(
    `INSERT INTO Concerne (fk_idOffre, fk_idPanier) VALUES (${concerne.fk_idOffre}, ${concerne.fk_idPanier})`
  );

  let message = 'Error in creating concerne';

  if (result.affectedRows) {
    message = 'concerne created successfully';
  }

  return {message};
}

async function update(id, concerne){
  const result = await db.query(
    `UPDATE Concerne SET fk_idOffre = '${concerne.fk_idOffre}', fk_idPanier = '${concerne.fk_idPanier}' WHERE Concerne.fk_idOffre = ${id};` 
  );

  let message = 'Error in updating concerne';

  if (result.affectedRows) {
    message = 'concerne updated successfully';
  }

  return {message};
}

async function remove(id){
  const result = await db.query(
    `DELETE FROM Concerne WHERE fk_idOffre=${id}`
  );

  let message = 'Error in deleting concerne';

  if (result.affectedRows) {
    message = 'concerne deleted successfully';
  }

  return {message};
}

module.exports = {
  getMultiple,
  create,
  update,
  remove
}