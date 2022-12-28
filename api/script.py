
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
		routes = open("routes/"+fichier+".js", "w")
		for ligne in patronRoutes:
			ligne = ligne.replace("nomVariable", fichier.replace("'", ""))
			ligne = ligne.replace("nomFichier", fichier)
			ligne = ligne.replace("nomTable", table)
			routes.write(ligne)
		
		patronRoutes.close()
		routes.close()

'''
	getMultiple = "SELECT * FROM nomTable LIMIT ${offset},${config.listPerPage}" #remplacer nom table
	create = "INSERT INTO Compte (pk_idCompte, email, motDePasse, dateCreation, etat, supprimme) VALUES (${compte.pk_idCompte}, ${compte.email}, ${compte.motDePasse}, ${compte.dateCreation}, ${compte.etat}, ${compte.supprimme})"
	update = "UPDATE Compte SET pk_idCompte = '${compte.pk_idCompte}', email = '${compte.email}', motDePasse = '${compte.motDePasse}', dateCreation = '${compte.dateCreation}', etat = '${compte.etat}', supprimme = '${compte.supprimme}' WHERE Compte.pk_idCompte = ${id};"
	remove = "DELETE FROM Compte WHERE pk_idCompte=${id}"
'''

def ecriture_services(tables):	
	getMultiple = "SELECT * FROM nomTable LIMIT ${offset},${config.listPerPage}" #to be replaced : "nomTable"
	getOne = "SELECT * FROM nomTable WHERE pk_id=${id}" #to be replaced : "nomTable", "pk_id"
	create = "INSERT INTO nomTable intoElements VALUES valuesElements" #to be replaced : "nomTable", "intoElements", "valuesElements"
	update = "UPDATE nomTable SET setElements WHERE nomTable.pk_id = ${id};" #to be replaced : "nomTable", "setElements", "pk_id"
	remove = "DELETE FROM nomTable WHERE pk_id=${id}" #to be replaced : "nomTable", "pk_id"
	getMultipleRequest = ""
	getOneRequest = ""
	createRequest = ""
	updateRequest = ""
	removeRequest = ""
	
	i = 0
	lt = len(tables)
	while i<lt:
		fichier = tables[i].lower()
		patronServices = open("script/compteServices.js", "r")
		services = open("services/"+fichier.lower()+".js", "w")
		
		getMultipleRequest = getMultiple.replace("nomTable", tables[i]) # getMultiple: OK

		getOneRequest = getOne.replace("nomTable", tables[i]).replace("pk_id", tables[i+1][0]) # remove: OK

		intoElements = "("
		valuesElements = "("
		firstVariable = 1
		for variable in tables[i+1]:
			if firstVariable == 0:
				intoElements += ", " #adds comma before each variable (unless it's the first one)
				valuesElements += ", "
			else:
				firstVariable = 0 #no comma inserted before first variable 

			intoElements += variable

			valuesElements += "${" + fichier.replace("'", "") + "." + variable + "}"
			
		intoElements += ")"
		valuesElements += ")"
		
		# create: OK
		createRequest = create.replace("nomTable", tables[i]).replace("pk_id", tables[i+1][0]).replace("intoElements", intoElements).replace("valuesElements", valuesElements)	# update: OK

		setElements = ""
		firstVariable = 1
		for variable in tables[i+1]: #builds string before adding it in the request
			if firstVariable == 0:
				setElements += ", " #adds comma before each variable (unless it's the first one)
			else:
				firstVariable = 0 #no comma inserted before first variable 

			setElements += variable + " = '${" + fichier.replace("'", "") + "." + variable + "}'"

		#uses built string to replace it in the request after the keyword "SET"
		updateRequest = update.replace("nomTable", tables[i]).replace("pk_id", tables[i+1][0]).replace("setElements", setElements)	# update: OK

		removeRequest = remove.replace("nomTable", tables[i]).replace("nomFichier", fichier).replace("pk_id", tables[i+1][0]) # remove: OK

		for ligne in patronServices:
			ligne = ligne.replace("nomFichier", fichier.replace("'", ""))
			ligne = ligne.replace("getMultipleRequest", getMultipleRequest)
			ligne = ligne.replace("getOneRequest", getOneRequest)
			ligne = ligne.replace("createRequest", createRequest)
			ligne = ligne.replace("updateRequest", updateRequest)
			ligne = ligne.replace("removeRequest", removeRequest)
			services.write(ligne)

		str = "app.use(\"/compte\", compteRouter);"
		print(str.replace("compte", fichier))

		patronServices.close()
		services.close()
		i += 2


if __name__ == '__main__':
	tables = process_sql_file("../../EtuBrestFoodv5.sql" )
	print(tables)
	#ecriture_routes(tables)
	#ecriture_services(tables)
