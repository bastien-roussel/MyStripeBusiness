# MyStripeBusiness
![Maintainer](https://img.shields.io/badge/Développeur-Bastien_ROUSSEL-blue)
[![Generic badge](https://img.shields.io/badge/Developpement-En_cours-orange.svg)](https://shields.io/)
[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/Naereen/badges)
MyStripeBusiness est un petit projet pour récupérer les infos / clients d'un compte stripe.

## Avancement
✅  API STRIPE
❌ INSERTION DONNÉES EN BDD (MARIADB)


## Installation

MyStripeBusiness nécessite [Node.js](https://nodejs.org/) v14+ pour fonctionner.

1) Installation des dépendances :
```sh
npm install
```

2) Ensuite, créer un fichier `.env`à la racine du projet avec le contenu suivant : 
```
HOST=127.0.0.1
PORT=3000
STRIPE_APIKEY=Ma_Clé_D'API_Stripe
```

3) Lancer le serveur NodeJS :
```
npm start
```
