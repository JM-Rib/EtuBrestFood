const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM Partenaire LIMIT ${offset},${config.listPerPage}`
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
    `SELECT * FROM Partenaire WHERE pk_idPartenaire=${id}`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

async function create(partenaire){
  const result = await db.query(
    `INSERT INTO Partenaire (pk_idPartenaire, typePart, nomPart, prenomPart, nTelPart, adressePart, fk_idCompte) VALUES (${partenaire.pk_idPartenaire}, ${partenaire.typePart}, ${partenaire.nomPart}, ${partenaire.prenomPart}, ${partenaire.nTelPart}, ${partenaire.adressePart}, ${partenaire.fk_idCompte})`
  );

  let message = 'Error in creating partenaire';

  if (result.affectedRows) {
    message = 'partenaire created successfully';
  }

  return {message};
}

async function update(id, partenaire){
  const result = await db.query(
    `UPDATE Partenaire SET pk_idPartenaire = '${partenaire.pk_idPartenaire}', typePart = '${partenaire.typePart}', nomPart = '${partenaire.nomPart}', prenomPart = '${partenaire.prenomPart}', nTelPart = '${partenaire.nTelPart}', adressePart = '${partenaire.adressePart}', fk_idCompte = '${partenaire.fk_idCompte}' WHERE Partenaire.pk_idPartenaire = ${id};` 
  );

  let message = 'Error in updating partenaire';

  if (result.affectedRows) {
    message = 'partenaire updated successfully';
  }

  return {message};
}

async function remove(id){
  const result = await db.query(
    `DELETE FROM Partenaire WHERE pk_idPartenaire=${id}`
  );

  let message = 'Error in deleting partenaire';

  if (result.affectedRows) {
    message = 'partenaire deleted successfully';
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