const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `getMultipleRequest`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function create(nomFichier){
  const result = await db.query(
    `createRequest`
  );

  let message = 'Error in creating nomFichier';

  if (result.affectedRows) {
    message = 'nomFichier created successfully';
  }

  return {message};
}

async function update(id, nomFichier){
  const result = await db.query(
    `updateRequest` 
  );

  let message = 'Error in updating nomFichier';

  if (result.affectedRows) {
    message = 'nomFichier updated successfully';
  }

  return {message};
}

async function remove(id){
  const result = await db.query(
    `removeRequest`
  );

  let message = 'Error in deleting nomFichier';

  if (result.affectedRows) {
    message = 'nomFichier deleted successfully';
  }

  return {message};
}

module.exports = {
  getMultiple,
  create,
  update,
  remove
}