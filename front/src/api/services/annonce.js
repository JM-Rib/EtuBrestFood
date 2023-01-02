const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM Annonce LIMIT ${offset},${config.listPerPage}`
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
    `SELECT * FROM Annonce WHERE pk_idAnnonce=${id}`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

async function create(annonce){
  const result = await db.query(
    `INSERT INTO Annonce (description, photo, fk_idPanier) VALUES ("${annonce.description}", "${annonce.photo}", ${annonce.fk_idPanier})`
  );

  let message = 'Error in creating annonce';

  if (result.affectedRows) {
    message = 'annonce created successfully';
  }

  return {message};
}

async function update(id, annonce){
  const result = await db.query(
    `UPDATE Annonce SET pk_idAnnonce = '${annonce.pk_idAnnonce}', description = '${annonce.description}', photo = '${annonce.photo}', fk_idPanier = '${annonce.fk_idPanier}' WHERE Annonce.pk_idAnnonce = ${id};` 
  );

  let message = 'Error in updating annonce';

  if (result.affectedRows) {
    message = 'annonce updated successfully';
  }

  return {message};
}

async function remove(id){
  const result = await db.query(
    `DELETE FROM Annonce WHERE pk_idAnnonce=${id}`
  );

  let message = 'Error in deleting annonce';

  if (result.affectedRows) {
    message = 'annonce deleted successfully';
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