
def process_sql_file(file_name):
	file = open(file_name, "r")
	string = ''
	tables = []
	colonnes = []
	for ligne in file:
		if "CREATE TABLE IF NOT EXISTS `etubrestfood`.`" in ligne:
			if colonnes:
				tables.append(colonnes)
			tables.append(ligne.replace("CREATE TABLE IF NOT EXISTS `etubrestfood`.`", "").replace("` (\n", ""))
			colonnes = []
		
		if "  `" in ligne:
			nomElem = ligne.replace("  `", "")
			nomElem = nomElem.split("`")[0]
			colonnes.append(nomElem)

		string += '' + ligne

	tables.append(colonnes)
	file.close()
	return tables[2:]#on exclut les requetes pour la table compte car elles sont déjà écrites.

def ecriture_routes(tables):	
	for table in tables[::2]:
		fichier = table.lower()
		patronRoutes = open("script/compteRoutes.js", "r")
		routes = open("routes/"+fichier.lower()+".js", "w")
		for ligne in patronRoutes:
			ligne = ligne.replace("compte", fichier)
			routes.write(ligne)
		
		patronRoutes.close()
		routes.close()

def ecriture_services(tables):	
	getMultiple = "SELECT * FROM Compte LIMIT ${offset},${config.listPerPage}"
	create = "SELECT * FROM Compte LIMIT ${offset},${config.listPerPage}"
	update = "SELECT * FROM Compte LIMIT ${offset},${config.listPerPage}"
	remove = "DELETE FROM Compte WHERE pk_idCompte=${id}"
	for table in tables[::2]
		fichier = table.lower()
		patronServices = open("script/compteServices.js", "r")
		services = open("services/"+fichier.lower()+".js", "w")
			
		print(req)
		
		patronServices.close()
		services.close()


if __name__ == '__main__':
	tables = process_sql_file("../../EtuBrestFood.sql" )
	print(tables)
	#ecriture_routes(tables)
	ecriture_services(tables)
