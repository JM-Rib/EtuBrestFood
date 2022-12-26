const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM Offre_des LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function create(offre_des){
  const result = await db.query(
    `INSERT INTO Offre_des (fk_idProduit, fk_idPartenaire, dateDon, quantiteProDonnes) VALUES (${offre_des.fk_idProduit}, ${offre_des.fk_idPartenaire}, ${offre_des.dateDon}, ${offre_des.quantiteProDonnes})`
  );

  let message = 'Error in creating offre_des';

  if (result.affectedRows) {
    message = 'offre_des created successfully';
  }

  return {message};
}

async function update(id, offre_des){
  const result = await db.query(
    `UPDATE Offre_des SET fk_idProduit = '${offre_des.fk_idProduit}', fk_idPartenaire = '${offre_des.fk_idPartenaire}', dateDon = '${offre_des.dateDon}', quantiteProDonnes = '${offre_des.quantiteProDonnes}' WHERE Offre_des.fk_idProduit = ${id};` 
  );

  let message = 'Error in updating offre_des';

  if (result.affectedRows) {
    message = 'offre_des updated successfully';
  }

  return {message};
}

async function remove(id){
  const result = await db.query(
    `DELETE FROM Offre_des WHERE fk_idProduit=${id}`
  );

  let message = 'Error in deleting offre_des';

  if (result.affectedRows) {
    message = 'offre_des deleted successfully';
  }

  return {message};
}

module.exports = {
  getMultiple,
  create,
  update,
  remove
}