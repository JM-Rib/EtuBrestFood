const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM Contient LIMIT ${offset},${config.listPerPage}`
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
    `SELECT * FROM Contient WHERE fk_idProduit=${id}`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

async function create(contient){
  const result = await db.query(
    `INSERT INTO Contient (fk_idProduit, quantiteProDansPa, fk_idPanier) VALUES (${contient.fk_idProduit}, ${contient.quantiteProDansPa}, ${contient.fk_idPanier})`
  );

  let message = 'Error in creating contient';

  if (result.affectedRows) {
    message = 'contient created successfully';
  }

  return {message};
}

async function update(id, contient){
  const result = await db.query(
    `UPDATE Contient SET fk_idProduit = '${contient.fk_idProduit}', quantiteProDansPa = '${contient.quantiteProDansPa}', fk_idPanier = '${contient.fk_idPanier}' WHERE Contient.fk_idProduit = ${id};` 
  );

  let message = 'Error in updating contient';

  if (result.affectedRows) {
    message = 'contient updated successfully';
  }

  return {message};
}

async function remove(id){
  const result = await db.query(
    `DELETE FROM Contient WHERE fk_idProduit=${id}`
  );

  let message = 'Error in deleting contient';

  if (result.affectedRows) {
    message = 'contient deleted successfully';
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