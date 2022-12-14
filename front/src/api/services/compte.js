const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM Compte LIMIT ${offset},${config.listPerPage}`
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
    `SELECT * FROM Compte WHERE pk_idCompte=${id}`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

async function create(compte){
  console.log(`INSERT INTO Compte ( email, motDePasse, dateCreation, desactive, supprimme) VALUES ( ${compte.email}, ${compte.motDePasse}, ${compte.dateCreation}, ${compte.desactive}, ${compte.supprimme})`);

  const result = await db.query(
    `INSERT INTO Compte ( email, motDePasse, dateCreation, desactive, supprimme) 
    VALUES
    ( "${compte.email}", "${compte.motDePasse}", "${compte.dateCreation}", ${compte.desactive}, ${compte.supprimme})`
  );

  let message = 'Error in creating compte';

  if (result.affectedRows) {
    message = 'Compte created successfully';
  }

  return {message};
}

async function update(id, compte){
  const result = await db.query(
    `UPDATE Compte 
    SET pk_idCompte = '${compte.pk_idCompte}', email = '${compte.email}', motDePasse = '${compte.motDePasse}',
    dateCreation = '${compte.dateCreation}', desactive = '${compte.desactive}', supprimme = '${compte.supprimme}' 
    WHERE Compte.pk_idCompte = ${id};` 
  );

  let message = 'Error in updating programming language';

  if (result.affectedRows) {
    message = 'compte updated successfully';
  }

  return {message};
}

async function remove(id){
  const result = await db.query(
    `DELETE FROM Compte WHERE pk_idCompte=${id}`
  );

  let message = 'Error in deleting compte';

  if (result.affectedRows) {
    message = 'compte deleted successfully';
  }

  return {message};
}

/*`SELECT Compte.pk_idCompte, CASE WHEN EXISTS(SELECT * FROM Compte WHERE Compte.email = "${compte.email}" AND Compte.motDePasse = "${compte.motDePasse}")THEN "TRUE" ELSE "FALSE" END
    as resultat;`*/
async function login(compte){
  //const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT (CASE WHEN EXISTS(SELECT * FROM Compte WHERE Compte.email = "${compte.email}" AND Compte.motDePasse = "${compte.motDePasse}" ) THEN "TRUE"  ELSE "FALSE"  END) as resultat,
      pk_idCompte FROM Compte WHERE Compte.email = "${compte.email}";`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

async function getId(email){
  const rows = await db.query(
    `SELECT pk_idCompte FROM Compte WHERE email="${email}"`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

module.exports = {
  getMultiple,
  getOne,
  create,
  update,
  remove,
  login,
  getId
}