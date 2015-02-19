# Compte les commentaires

Toutes les fonctions de **Lo-Dash** sont très utiles, mais laissez-moi
vous montrer une de mes préférées : la fonction `groupBy`.

## Rapprochez-vous pour la mêlée

```js
_.groupBy(collection, [callback=identity])
```

Ce code crée un objet dont les clés sont générées à partir des résultats
produits par la fonction de rappel sur chaque élément de la collection.
Chaque clé est associée à un tableau des éléments pour lesquels cette
clé a été produite.

### Exemple

```js
_.groupBy(
    [4.2, 6.1, 6.4],
    function(num)
    {
        return Math.floor(num);
    }
);
// => { '4': [4.2], '6': [6.1, 6.4] }

// En utilisant la notation courte ".pluck"…
_.groupBy(
    [
        {name: 'mike', age: 23},
        {name: 'mike', age: 41},
        {name: 'tom',  age: 19}
    ],
    'name'
);
/*
{
    'mike': [
        {name: 'mike', age: 23},
        {name: 'mike', age: 41}
    ],
    'tom': [
        {name: 'tom', age: 19}
    ]
}
*/
```

## `size`

Une autre fonction que j’utilise souvent est `size`.

```js
 _.size(collection)
 ```

`size` donne la taille d’une collection soit en renvoyant `array.length`
si on est sur un tableau ou un objet similaire, soit en examinant le
nombre de propriété énumérables si on est sur un objet.

### Exemple

```js
_.size([1, 2]); // => 2

_.size({ 'one': 1, 'two': 2, 'three': 3 }); // => 3

_.size('pebbles'); // => 7
```

## Votre mission

Nous avons un tableau de commentaires issus du site web :

```js
[
    { username: "tim", comment: "you are doing a great job!" },
    { username: "tim", comment: "when you have new workshoppers?" },
    { username: "cat_lover", comment: "wtf? where are all the cats gone?" },
    { username: "max", comment: "where have you been on friday? we missed you!" },
    { username: "max", comment: "You don't answer anymore - why?" },
    { username: "cat_lover", comment: "MORE cats!!!" },
    { username: "max", comment: "i really love your site" }
]
```

Je veux savoir combien de commentaires chaque utilisateur a posté,
aussi écrivez une fonction qui :

1. Compte les commentaires par `username` ;
2. Trie le tableau obtenu par nombre décroissant de commentaires.

```js
[ { username: "foo",    comment_count: 9 },
  { username: "foobar", comment_count: 2 } ]
```

## Base de travail

Votre solution doit être un module avec la structure suivante :

```js
// On requiert Lo-Dash
var _ = require("lodash");

function getUsersByDecreasingComments(/* arguments */) {
    // Faites votre boulot ici, renvoyez les bonnes données
};

// Exportez la fonction hors du module
module.exports = getUsersByDecreasingComments;
```

**{appname}** appellera votre fonction et la testera avec divers arguments.
