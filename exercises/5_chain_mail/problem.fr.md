# Travail à la chaîne #
Parfois, l'utilisation d'une seule fonction n'est pas suffisante. Le `chaînage` peut alors vous permettre de réduire la quantité de code tout en vous permettant de faire votre travail.
* * *
## Du genre ? ##
C'est là que la fonction `_.chain` entre en jeu:
```js
_.chain(value)
```
`chain` vous permet de chaîner ou de lier plusieurs méthodes **Lo-Dash** ensemble sur une collection (tableaux, objets) et de retourner la valeur de l'ensemble de l'opération.

#### Exemple ####
```js
var users = [
  { 'user': 'barney',  'age': 36 },
  { 'user': 'fred',    'age': 40 },
  { 'user': 'pebbles', 'age': 1 }
];

var youngest = _.chain(users)
  .sortBy('age')
  .map(function(chr) {
    return chr.user + ' is ' + chr.age;
  })
  .first()
  .value();

// → 'pebbles is 1'
```

* * *
## Votre Mission ##
Nous avons une liste de mots que nous voulons modifier.
```js
['Test', 'Hello', 'World', 'Node', 'JavaScript']
```
Nous voulons modifier chaque mot afin de leur ajouter **Chained**, de les convertir en majuscules, et de les classer par ordre alphabétique. Le résultat final devrait ressembler à ceci:  
```js
['HELLOCHAINED', 'JAVASCRIPTCHAINED', 'NODECHAINED', 'TESTCHAINED', 'WORLDCHAINED']
```

#### Base de travail ####
Votre solution doit être un module avec la structure suivante:
```js
// On requiert Lo-Dash
var _ = require("lodash");

var worker = function(/* arguments */) {
    // Faites votre boulot ici, renvoyez les bonnes données
};

// Exportez la fonction hors du module
module.exports = worker;
```
**lololodash** appellera votre fonction et la testera avec divers arguments.
