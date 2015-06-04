# Cotte de Mailles #
Parfois, une seule méthode d'utilité ne suffit pas ou peu. Chaînage méthodes ensemble vous permet de couper la quantité de code tout en vous permettant de faire votre travail.
* * *
## Du genre? ##
Ceci est où le fonction `_.chain` vient en:
```js
_.chain(value)
```
`chain` vous permet de chaîne ou liez plusieurs **Lo-Dash** méthodes ensemble sur une collection (tableaux, objets) explicitement et puis finalement retourne la valeur de l'ensemble de l'opération.

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
Nous voulons modifier chaque mot afin qu'ils soient tous ajoutés avec le mot Enchaîné, converti en lettres majuscules, et classés par ordre alphabétique. Le résultat devrait ressembler à ceci:  
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
