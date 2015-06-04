# Analyse

Allons un peu plus en profondeur…

## Loin, beaucoup plus loin…

Pour cette mission, vous aurez besoin de connaître la fonction `filter`.

```js
_.filter(collection, [callback=identity])
```

`filter` itère à travers les éléments de la collection, et renvoie un
tableau de tous les éléments pour lesquels le prédicat `callback` a
renvoyé `true`.  Elle peut être utilisée avec les notations courtes ".pluck".

## Exemple

```js
_.filter(
    [1, 2, 3, 4, 5, 6],
    function(num) {
        return num % 2 === 0;
    }
);
// => [2, 4, 6]

var characters = [
  { 'name': 'barney', 'age': 36, 'blocked': false },
  { 'name': 'fred',   'age': 40, 'blocked': true }
];
_.filter(characters, 'blocked');
// => [{ 'name': 'fred', 'age': 40, 'blocked': true }]
```

Vous vous souvenez de la fonction `where` dans le premier exercice ?
C’est globalement pareil, sauf que `filter` prend une fonction de
rappel qui décrit une logique personnalisée de filtrage, alors que
`where` prenait un objet représentant des conditions plus simples.

## Votre mission

Nous avons un tableau d’objets décrivant les revenus de quelques
*freelances* :

```js
[ { name: "mike",  income: 2563 },
  { name: "kim",   income: 1587 },
  { name: "liz",   income: 3541 },
  { name: "tom",   income: 2475 },
  { name: "bello", income: 987  },
  { name: "frank", income: 2975 } ]
```

Écrivez une fonction qui :

1) Calcule le revenu moyen pour tous les freelances ;
2) Découpe les freelances en deux groupes :

   a) `'underperform'` pour ceux dont le revenu ne dépasse pas le revenu moyen ;
   b) `'overperform'` pour les autres.

3) Trie les freelances dans chaque groupe par revenu croissant ;
4) Renvoie un objet avec la structure suivante :

```js
{
    "average": 167,
    "underperform": [
        { "name": "foobar", "income": 99 },
        { "name": "dummy", "income": 100 }
    ],
    "overperform": [
        { "name": "foo", "income": 302 }
    ]
}
```

## Base de travail

Votre solution doit être un module avec la structure suivante :

```js
// On requiert Lo-Dash
var _ = require("lodash");

function processFreelancers(/* arguments */) {
    // Faites votre boulot ici, renvoyez les bonnes données
};

// Exportez la fonction hors du module
module.exports = processFreelancers;
```

**{appname}** appellera votre fonction et la testera avec divers arguments.
