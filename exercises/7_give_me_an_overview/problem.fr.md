# Fais-moi un résumé

Combien de fois vous êtes-vous battu-e pour obtenir un total
à travers une grosse collection d’objets ?  Eh bien, avec **Lo-Dash**,
on a une fonction pour ça.

## Montre le chemin

Pour cette mission, nous allons utiliser la fonction `reduce`.

```js
_.reduce(collection, [callback=identity], [accumulator])
```

`reduce` parcourt `collection` et appelle `callback` à chaque fois
pour faire évoluer un *accumulateur* qu’elle transmet à chaque appel.
À chaque fois, `callback(accumulator, value, index|key, collection)`
est appelée (enfin, une nouvelle signature !), et elle doit renvoyer
la nouvelle valeur de l’accumulateur.

- `accumulator` est donc la valeur qui évolue au fil des tours ;
- `value` est la valeur de l’élément courant ;
- `key` est la clé, ou l’index, de l’élément courant dans la collection.


## Exemple

```js
_.reduce(
    [1, 2, 3],
    function(sum, num) {
        return sum + num;
    }
);
// => 6

_.reduce(
    { 'a': 1, 'b': 2, 'c': 3 },
    function(result, num, key) {
        result[key] = num * 3;
        return result;
    },
    {}
);
// => { 'a': 3, 'b': 6, 'c': 9 }
```

## Votre mission

Nous avons un tableau de commandes faites dans un magasin :

```js
[ { article: 1, quantity: 4 },
  { article: 2, quantity: 2 },
  { article: 1, quantity: 5 } ]
```

Comme vous pouvez le voir dans ces données d’exemple, l’article 1 a été
commandé deux fois.  Nous voulons connaître la quantité totale commandée
pour chaque article.

Écrivez une fonction qui :

1. Calcule la quantité totale commandée pour chaque article ;
2. Trie le tableau obtenu par quantité commandée décroissante

```js
[ { article: 1, total_orders: 9 },
  { article: 2, total_orders: 2 } ]
```

## Base de travail

Votre solution doit être un module avec la structure suivante :

```js
// On requiert Lo-Dash
var _ = require("lodash");

function getArticlesByDecreasingOrders(/* arguments */) {
    // Faites votre boulot ici, renvoyez les bonnes données
};

// Exportez la fonction hors du module
module.exports = getArticlesByDecreasingOrders;
```

**{appname}** appellera votre fonction et la testera avec divers arguments.
