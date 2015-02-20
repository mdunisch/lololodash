# Dans tous les cas

En JavaScript (dans les navigateurs récents ou dans **Node.js**), vous
avez des fonctions **[ECMAScript5](http://www.ecma-international.org/ecma-262/5.1/)**
dédiées aux objets et tableaux (par exemple `Array.prototype.forEach`
ou `Object.keys`).  Toutes les fonctions de **Lo-Dash** appartiennent
à l’une des catégories suivantes :

- Fonctions sur tableaux
- Fonctions sur objets : utiles pour les objets et données JSON
- Fonctions sur collections : utiles pour des séquences de données de toute nature
- Fonctions utilitaires : on y viendra plus tard

Une bonne partie des fonctions ES5 peuvent être utilisées sur des tableaux ou
sur des objets, mais pas les deux.  Les fonctions **Lo-Dash**, elles, le peuvent !

## OK, et alors ?

Pour cette mission, laissez-moi vous montrer la fonction `forEach` -- une
fonction *sur collection*.  Vous la connaissez sans doute déjà pour les
tableaux, mais pour les objets ?

```js
_.forEach(collection, [callback=identity])
```

Contrairement à `sortBy`, si `callback` est précisé, il doit absolument s’agir
d’une fonction.  Comme pour `sortBy` en revanche, elle sera appelée avec
`callback(value, index|key, collection)`.

Cette fonction itère sur les éléments de la *collection* (un tableau, ou un
objet agissant comme une table de correspondance), en appelant `callback` à
chaque itération.  La fonction de rappel peut court-circuiter l’itération
en renvoyant `false`.

## Exemple

```js
_.forEach(
    { 'foo': { 'int': 1 }, 'bar': { 'int': 5 } },
    function(item) {
        console.log(item.int);
    }
);

// 1
// 5
```

## Votre mission

Écrivez une fonction qui prend une table de correspondance (un tableau
associatif, en phrasé PHP) de villes européennes avec leurs populations,
en millions :

```js
{ Hamburg:    { population: 1.698 },
  Strasbourg: { population: 0.272 },
  Rome:       { population: 2.753 },
  Dublin:     { population: 0.528 } }
```

Nous voulons ajouter un nouvel attribut `size` à chaque ville, dont la valeur
dépend de la population, comme suit :

```js
{ City1: {population: 1.58, size: 'big'  },
  City2: {population: 0.58, size: 'med'  },
  City3: {population: 0.28, size: 'small'} }
```

**Attention :** la liste peut aussi être un tableau, il faudra donc utiliser
une fonction de collection.

Utilisez les règles suivantes pour définir `size` :

- Toutes les villes de population d’au moins 1 million sont `'big'`.
- Toutes les villes de population inférieure à 1 million mais d’au moins 0.5 million sont `'med'`.
- Les autres villes sont `'small'`.

## Conseil

Vous ne savez pas par où démarrer ?  Utilisez `forEach` pour itérer à travers
les données fournies, et une struture conditionnelle `if-else if-else` pour
déterminer la valeur de `size`.

## Base de travail

Votre solution doit être un module avec la structure suivante :

```js
// On requiert Lo-Dash
var _ = require("lodash");

function assignSizes(/* arguments */) {
    // Faites votre boulot ici, renvoyez les bonnes données
};

// Exportez la fonction hors du module
module.exports = assignSizes;
```

**{appname}** appellera votre fonction et la testera avec divers arguments.
