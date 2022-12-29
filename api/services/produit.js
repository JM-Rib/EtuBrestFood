const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM Produit LIMIT ${offset},${config.listPerPage}`
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
    `SELECT * FROM Produit WHERE pk_idProduit=${id}`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

async function create(produit){
  const result = await db.query(
    `INSERT INTO Produit (titrePro, quantiteProEnStock) VALUES (${produit.titrePro}, ${produit.quantiteProEnStock})`
  );

  let message = 'Error in creating produit';

  if (result.affectedRows) {
    message = 'produit created successfully';
  }

  return {message};
}

async function update(id, produit){
  const result = await db.query(
    `UPDATE Produit SET pk_idProduit = '${produit.pk_idProduit}', titrePro = '${produit.titrePro}', quantiteProEnStock = '${produit.quantiteProEnStock}' WHERE Produit.pk_idProduit = ${id};` 
  );

  let message = 'Error in updating produit';

  if (result.affectedRows) {
    message = 'produit updated successfully';
  }

  return {message};
}

async function remove(id){
  const result = await db.query(
    `DELETE FROM Produit WHERE pk_idProduit=${id}`
  );

  let message = 'Error in deleting produit';

  if (result.affectedRows) {
    message = 'produit deleted successfully';
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