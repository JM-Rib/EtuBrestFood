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
    `INSERT INTO Partenaire (typePart, nomPart, prenomPart, nTelPart, adressePart, fk_idCompte) VALUES ("${partenaire.typePart}", "${partenaire.nomPart}", "${partenaire.prenomPart}", "${partenaire.nTelPart}", "${partenaire.adressePart}", ${partenaire.fk_idCompte})`
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

async function getNom(id){
  const rows = await db.query(
    `SELECT nomPart, prenomPart FROM Partenaire WHERE pk_idPartenaire=${id}`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

async function nouveauDon(offre_des){
  offre_des.dateDon = new Date().toJSON().slice(0,10);
  const result = await db.query(
    `INSERT INTO Offre_des (fk_idProduit, fk_idPartenaire, dateDon, quantiteProDonnes ) VALUES (${offre_des.fk_idProduit}, ${offre_des.fk_idPartenaire}, "${offre_des.dateDon}", ${offre_des.quantiteProDonnes})`
  );

  let message = 'Error in creating offre_des';

  if (result.affectedRows) {
    message = 'offre_des created successfully';
  }

  return {message};
}

async function afficheDons(id){
  const rows = await db.query(
    `SELECT produit.titrePro, offre_des.dateDon, offre_des.quantiteProDonnes, offre.recupParEtu FROM offre
      JOIN panier on offre.fk_idPanier = panier.pk_idPanier
      JOIN contient on panier.pk_idPanier = contient.fk_idPanier
      RIGHT JOIN produit on contient.fk_idProduit = produit.pk_idProduit
      JOIN offre_des on produit.pk_idProduit = offre_des.fk_idProduit
    WHERE offre_des.fk_idPartenaire = ${id};`
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
  getNom,
  nouveauDon,
  afficheDons
}