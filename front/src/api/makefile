comptecreate: json/comptecreate.json
	curl -i -X POST -H 'Accept: application/json' -H 'Content-type: application/json' http://localhost:8000/compte --data @json/comptecreate.json

compteupdate: json/compteupdate.json
	curl -i -X PUT -H 'Accept: application/json' -H 'Content-type: application/json' http://localhost:8000/compte/10 --data @json/compteupdate.json

comptedelete:
	curl -X "DELETE" http://localhost:8000/compte/10

compteget:
	curl -i -X GET -H 'Accept: application/json' -H 'Content-type: application/json' http://localhost:8000/compte

comptelogin:
	curl -i -X POST -H 'Accept: application/json' -H 'Content-type: application/json' http://localhost:8000/compte/login --data @json/comptelogin.json

#comptelogin: json/comptelogin.json
#	curl -i -X GET -H 'Accept: application/json' -H 'Content-type: application/json' http://localhost:8000/compte/login --data @json/comptelogin.json
