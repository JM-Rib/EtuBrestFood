const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM Panier LIMIT ${offset},${config.listPerPage}`
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
    `SELECT * FROM Panier WHERE pk_idPanier=${id}`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

async function create(panier){
  const result = await db.query(
    `INSERT INTO Panier (nomPa, quantitePa, adressePanier, typePa) VALUES (${panier.nomPa}, ${panier.quantitePa}, ${panier.adressePanier}, ${panier.typePa})`
  );

  let message = 'Error in creating panier';

  if (result.affectedRows) {
    message = 'panier created successfully';
  }

  return {message};
}

async function update(id, panier){
  const result = await db.query(
    `UPDATE Panier SET pk_idPanier = '${panier.pk_idPanier}', nomPa = '${panier.nomPa}', quantitePa = '${panier.quantitePa}', adressePanier = '${panier.adressePanier}', typePa = '${panier.typePa}' WHERE Panier.pk_idPanier = ${id};` 
  );

  let message = 'Error in updating panier';

  if (result.affectedRows) {
    message = 'panier updated successfully';
  }

  return {message};
}

async function remove(id){
  const result = await db.query(
    `DELETE FROM Panier WHERE pk_idPanier=${id}`
  );

  let message = 'Error in deleting panier';

  if (result.affectedRows) {
    message = 'panier deleted successfully';
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