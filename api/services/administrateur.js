const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM Administrateur LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function create(administrateur){
  const result = await db.query(
    `INSERT INTO Administrateur (pk_idAdministrateur, login, mdp, fk_idCompte) VALUES (${administrateur.pk_idAdministrateur}, ${administrateur.login}, ${administrateur.mdp}, ${administrateur.fk_idCompte})`
  );

  let message = 'Error in creating administrateur';

  if (result.affectedRows) {
    message = 'administrateur created successfully';
  }

  return {message};
}

async function update(id, administrateur){
  const result = await db.query(
    `UPDATE Administrateur SET pk_idAdministrateur = '${administrateur.pk_idAdministrateur}', login = '${administrateur.login}', mdp = '${administrateur.mdp}', fk_idCompte = '${administrateur.fk_idCompte}' WHERE Administrateur.pk_idAdministrateur = ${id};` 
  );

  let message = 'Error in updating administrateur';

  if (result.affectedRows) {
    message = 'administrateur updated successfully';
  }

  return {message};
}

async function remove(id){
  const result = await db.query(
    `DELETE FROM Administrateur WHERE pk_idAdministrateur=${id}`
  );

  let message = 'Error in deleting administrateur';

  if (result.affectedRows) {
    message = 'administrateur deleted successfully';
  }

  return {message};
}

module.exports = {
  getMultiple,
  create,
  update,
  remove
}