<p align="center">
  <img src="/front/src/logo.png" alt="Logo EtuBrestFood"  width="200"/>
</p>

# EtuBrestFood
  
Ce repo fut crée dans le cadre d'un projet étudiant , ayant pour but de développer l'application web d'une structure associative fictive nommée ["etubrestfood"](https://drive.google.com/file/d/1w0TKgJDsoypoLU_sBQp5gMMxhfLh0LV2/view?usp=sharing), offrant une aide alimentaire aux étudiants.

L'association aurait pour rôle de récupérer les produit donnés par des partenaires (commerçants, producteurs, etc.) puis de les stocker dans un local associatif et constituer différents types des paniers alimentaires. Ces paniers pourraient ensuite être réservés par des étudiants qui pourront aller les récupérer sur place. 

L'application web a donc pour objectif de gérer les inscriptions des étudiants, les connexions au site, la consultation des offres disponibles et la commandes de paniers alimentaires par les étudiants.\
Nous avons fait le choix d'utiliser react pour la partie frontend et nodejs pour la partie backend du site.
Nous avons aussi choisi d'utiliser MariaDB pour notre base de données.\
Ces choix se justifient par notre familiarité avec ces outils mais aussi par la rapidité d'implémentation grâce à la réutilisation de composants.

## Routes de l'api REST

Afin de faire fonctionner notre site, nous avons identifié un certain nombre de besoins essentiels auquels l'API devrait répondre. Ces fonctionalités sont mises en place grâce à des requêtes SQL qui sont executées lors de l'accès à leur route correspondante.\
Ci-dessous se trouve une liste non exhaustive de requêtes ainsi que leurs routes correspondantes.

* Liste de l’ensemble des paniers disponibles à la commande.     <b>GET</b> `/panier`
* Récupération des informations d’un panier.     <b>GET</b> `/panier/[id]`
* Creation d’une offre pour un étudiant et un panier donné.     <b>POST</b> `/offre`
* Liste tout les produits donnés par un partenaire avec indication de s’il fut récupéré par un étudiant ou non.     <b>GET</b> `/partenaire/afficheDons/[id]`
* Création d’un compte étudiant.     <b>POST</b> `/partenaire/new`
* Création d’un compte partenaire.     <b>POST</b> `/partenaire/new`
* Connexion à un compte.     <b>POST</b> `/compte/login`
* Récupérer le nom de l’étudiant.     <b>GET</b> `/etudiant/nom/[id]`
* Récupérer le nom du partenaire.     <b>GET</b> `/partenaire/nom/[id]`

## Fonctionalités de la partie frontend

La partie frontend du site n'a malheuresement pas pu être intégralement réalisée mais nous avons pu implémenter un certain nombre de fonctionalités.\
Voici une liste de ces fonctionalités ainsi que celles qui n'ont pas pû être complètées.

- [x] Acceuil du site.
- [x] Header de navigation du site.
- [x] Inscription d'un étudiant.
- [x] Connexion à un compte étudiant.
- [x] Affichage des paniers disponibles.
- [x] Accès à la page d'un panier.
- [ ] Réservation d'un panier.
- [ ] Page "Mon Espace" pour consulter les commandes effectuées.
- [ ] Page "Contacts".

## Configuration de la partie react

Sous le répertoire `front`, lancer d'abord la commande suivante afin d'installer toutes les dépendances requises:

### `npm install`

Puis executer cette commande afin de démarrer la partie frontend de l'application web:

### `npm start`

L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Configuration de la partie nodejs

Sous le répertoire `front/src/api`, lancer d'abord la commande suivante afin d'installer toutes les dépendances requises:

### `npm install`

Puis executer cette commande afin de démarrer la partie frontend de l'application web:

### `npm start`

L'API sera accessible à l'adresse [http://localhost:8000](http://localhost:8000) dans votre navigateur.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[etubrestfood-logotype]: /front/src/logo.png
