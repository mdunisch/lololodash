# Tout le monde a la moyenne

Vous en avez marre d’écrire des boucles sur les tableaux ?  **Lo-Dash** vous
fournit tout un tas de fonctions pour vous aider sur ce coup.

## Du genre ?

Par exemple, les fonctions `every` et `some` :

```js
_.every(collection, [callback=identity])
_.some(collection, [callback=identity])
```

`every` et `some` vérifient que le `callback` fournit renvoie `true` pour
**tous** les éléments, ou pour **au moins un** élément, respectivement.

La fonction `some` renvoie `true` dès qu’elle tombe sur un élément qui
est validé, alors que `every` renvoie `false` dès qu’elle tombe sur un
élément refusé.  La fonction de rappel a la même signature que celles que
vous avez déjà vues.

## Exemple

```js
_.every([true, false, true], true);
// => false

var characters = [
  { 'name': 'barney', 'age': 36 },
  { 'name': 'fred',   'age': 40 }
];

// Utilisons le raccourci de type ".pluck"…
_.every(characters, 'age');
// => true
```

## Votre mission

Nous avons une liste des températures moyennes quotidiennes pour diverses
villes européennes.

```js
{ Hamburg:   [14,15,16,14,18,17,20,22,21,18,19,23],
  Munich:    [16,17,19,20,21,23,22,21,20,19,24,23],
  Madrid:    [24,23,20,24,24,23,21,22,24,20,24,22],
  Stockholm: [16,14,12,15,13,14,14,12,11,14,15,14],
  Warsaw:    [17,15,16,18,20,20,21,18,19,18,17,20] }
```

Nous voulons trier ces villes en deux groupes : `'warm'` et `'hot'`.  Le
groupe `'warm'` devrait contenir les villes qui ont au moins une journée
dont la température a dépassé 19.  Le groupe `'hot'` devrait contenir les
villes dont la température a dépasse 19 tous les jours.  Les deux groupes
ne sont évidemment pas exclusifs.  Le résultat devrait ressembler à ceci
en termes de structure :

```js
{  hot: [ "Hottown" ],
  warm: [ "Town1", "Town2", "Town3" ] }
```

## Base de travail

Votre solution doit être un module avec la structure suivante :

```js
// On requiert Lo-Dash
var _ = require("lodash");

function categorizeCities(/* arguments */) {
    // Faites votre boulot ici, renvoyez les bonnes données
};

// Exportez la fonction hors du module
module.exports = categorizeCities;
```

**{appname}** appellera votre fonction et la testera avec divers arguments.
