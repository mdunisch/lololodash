# On démarre !

**Bonjour — allez, découvrons Lo-Dash !**


Qu’est-ce que **[Lo-Dash](http://lodash.com/)** ?  C’est une bibliothèque JavaScript
qui vous fournit tout un tas de méthodes utiles pour manipuler des tableaux, du JSON,
des objets JavaScript…  **Lo-Dash** peut être utilisé avec Node.js ou dans le
navigateur.

Vous avez peut-être déjà entendu parler de **[underscore.js](http://underscorejs.org/)** ?
**Lo-Dash** est un dérivé d’**underscore.js** et je le trouve juste meilleur !
Si vous connaissez déjà **underscore.js**, c‘est super.  Vous n’aurez clairement
aucun problème pour vous habituer à **Lo-Dash** !

## Allez, on s’y met

Commençons avec une fonction très fréquemment utilisée de **Lo-Dash**,
appelée `filter` :

```js
_.filter(collection, props)
```

`filter` filtre `collection` en utilisant la condition définie par `props`.
`collection` peut être n’importe quoi -- un `Array`, du JSON ou un objet Javascript.

## Exemple

```js
var characters = [
  { 'name': 'barney', 'age': 36, 'pets': ['hoppy'] },
  { 'name': 'fred',   'age': 40, 'pets': ['baby puss', 'dino'] }
];

_.filter(characters, { 'age': 36 });

// [{ 'name': 'barney', 'age': 36, 'pets': ['hoppy'] }]
```

## Votre mission

Nous avons un tableau d’objets JavaScript qui représentent des utilisateurs,
au format suivant :

```js
[
    { id: 22, username: "martin", active: true },
    { id: 23, username: "max",    active: false },
    { id: 24, username: "linda",  active: false }
]
```

Écrivez une fonction qui prend une telle liste comme premier argument, et renvoie
seulement les utilisateurs *actifs* (`active === true`).

## Base de travail

Votre solution doit être un module avec la structure suivante :

```js
// On requiert Lo-Dash
var _ = require("lodash");

function filterActive(/* arguments */) {
    // Faites votre boulot ici, renvoyez les bonnes données
};

// Exportez la fonction hors du module
module.exports = filterActive;
```

**{appname}** appellera votre fonction et la testera avec divers arguments.

## Pour démarrer

Assurez-vous que **Lo-Dash** est installée !

```sh
$ npm install lodash
```

Au travail !
