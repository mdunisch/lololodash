# Trie-moi

Trier un tableau ou des données JSON est parfois bien pénible en JavaScript nu.
**Lo-Dash** peut vous aider.


## La solution

Permettez-moi de vous présenter la fonction `sortBy` :

```js
_.sortBy(collection, [callback=identity])
```

La fonction `sortBy` trie l’objet `collection` (un tableau d’objets, ou de types
primitifs, ou un mélange des deux) en utilisant le `callback` (qui peut être un
tableau, une fonction, un objet ou une `String`) à chaque itération.

## Exemple

```js
_.sortBy([1, 2, 3], function(num) { return Math.sin(num); });

// → [3, 1, 2]
```

Si `callback` est une fonction, elle sera appelée comme `callback(value, index|key, collection)`.

Comme la plupart des fonctions **Lo-Dash**, `sortBy` peut également utiliser
des raccourcis *`.map`* (voir http://lodash.com/docs#map),
tels qu’un nom de propriété (ou plusieurs noms) :

```js
var characters = [
  { 'name': 'barney',  'age': 36 },
  { 'name': 'fred',    'age': 40 },
  { 'name': 'barney',  'age': 26 },
  { 'name': 'fred',    'age': 30 }
];

_.sortBy(characters, 'age');

/*
[
    { name: 'barney', age: 26 },
    { name: 'fred',   age: 30 },
    { name: 'barney', age: 36 },
    { name: 'fred',   age: 40 }
]
*/
```

**Attention :** `sortBy` triera toujours par ordre croissant, du plus petit au
plus grand !

## Votre mission

Nous avons un tableau d’éléments vendus hier, comme ceci :

```js
[{ article: 41,   quantity: 24 },
 { article: 2323, quantity: 2  },
 { article: 655,  quantity: 23 }]
```

Écrivez une fonction qui va trier ces éléments par `quantity`, mais
du *plus grand* au *plus petit*.

## Conseil

Parce que `sortBy` ne trie que de façon croissante, vous aurez sans doute
besoin de définir une fonction de rappel.

## Base de travail

Votre solution doit être un module avec la structure suivante :

```js
// On requiert Lo-Dash
var _ = require("lodash");

function bestSellersFirst(/* arguments */) {
    // Faites votre boulot ici, renvoyez les bonnes données
};

// Exportez la fonction hors du module
module.exports = bestSellersFirst;
```

**{appname}** appellera votre fonction et la testera avec divers arguments.
