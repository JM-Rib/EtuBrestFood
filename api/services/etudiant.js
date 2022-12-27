const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM Etudiant LIMIT ${offset},${config.listPerPage}`
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
    `SELECT * FROM Etudiant WHERE pk_idEtudiant=${id}`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

async function create(etudiant){
  const result = await db.query(
    `INSERT INTO Etudiant (pk_idEtudiant, nomEtu, prenomEtu, nTelEtu, numeroEtu, fk_idCompte) VALUES (${etudiant.pk_idEtudiant}, ${etudiant.nomEtu}, ${etudiant.prenomEtu}, ${etudiant.nTelEtu}, ${etudiant.numeroEtu}, ${etudiant.fk_idCompte})`
  );

  let message = 'Error in creating etudiant';

  if (result.affectedRows) {
    message = 'etudiant created successfully';
  }

  return {message};
}

async function update(id, etudiant){
  const result = await db.query(
    `UPDATE Etudiant SET pk_idEtudiant = '${etudiant.pk_idEtudiant}', nomEtu = '${etudiant.nomEtu}', prenomEtu = '${etudiant.prenomEtu}', nTelEtu = '${etudiant.nTelEtu}', numeroEtu = '${etudiant.numeroEtu}', fk_idCompte = '${etudiant.fk_idCompte}' WHERE Etudiant.pk_idEtudiant = ${id};` 
  );

  let message = 'Error in updating etudiant';

  if (result.affectedRows) {
    message = 'etudiant updated successfully';
  }

  return {message};
}

async function remove(id){
  const result = await db.query(
    `DELETE FROM Etudiant WHERE pk_idEtudiant=${id}`
  );

  let message = 'Error in deleting etudiant';

  if (result.affectedRows) {
    message = 'etudiant deleted successfully';
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