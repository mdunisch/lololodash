# Commence les templates

Vous vous souvenez des **fonctions utilitaires** que j’évoquais il
y a quelques exercices ?  C’est l’heure d’en voir une : faisons un
peu de *templating* !

## Fais voir un peu

Pour cette mission, laissez-moi vous montrer la fonction `template`.
`_.template()` vous permet d’utiliser un micro-moteur de *templating*
simple mais pratique.

```js
_.template(text)(data)
```

`template` utilise `text` comme template, et vous renvoie un
interpolateur (un template « compilé ») pour vos données, sous
forme d’une fonction que vous pouvez ensuite appeler avec divers
jeux de données.

Dans votre texte de template, vous pouvez utiliser la syntaxe
`<%= VARNAME %>` pour injecter le contenu d’une propriété de donnée
le moment venu.

## Exemple
```js
_.template('<b><%= value %></b>')({ value: 'attention' });

// => '<b>attention</b>'

```

## Votre mission

Pour commencer, utilisez la fonction `template()` pour interpoler
les éléments d’un objet raisonnablement simple :

```js
{ name: "Foo",
  login: [ 1407574431, 140753421 ]
}
```

Nous voulons obtenir une `String` unique avec le nom de l’utilisateur
et le nombre de fois qu’ils s’est connecté (chaque horodatage
représente une connexion).  Votre fonction devrait renvoyer une
`String` qui ait l’aspect suivant :

```
Bonjour Foo (connexions : 2)
```

## Base de travail

Votre solution doit être un module avec la structure suivante :

```js
// On requiert Lo-Dash
var _ = require("lodash");

function runTemplate(/* arguments */) {
    // Faites votre boulot ici, renvoyez les bonnes données
};

// Exportez la fonction hors du module
module.exports = runTemplate;
```

**{appname}** appellera votre fonction et la testera avec divers arguments.
