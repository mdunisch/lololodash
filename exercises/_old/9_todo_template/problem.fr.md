# Template de To-Do

Si vous avez fini le dernier exercice, vous vous dites peut-être :
« des templates, ça ? C’est juste un autre mot pour de l’interpolation
de texte ! » ; mais en fait, la fonction `template` de Lo-Dash vous
permet d’aller plus loin.

## Aller au fond des templates

`template()` peut davantage.  Vous pouvez en fait ajouter n’importe quel
code JavaScript entre les `<%…%>`.  Si vous connaissez PHP, c’est à peu
près la même chose que son `<?… ?>`.

## Exemple

```js
var mytemplate = '<% _.forEach(data, function(item){ %>' +
    '<li><%= item %></li>' +
    '<% }); %>';
_.template(mytemplate)({data: [1, 2, 3]});

/*
<li>1</li>
<li>2</li>
<li>3</li>
*/
```

Vous pouvez écrire des templates sans avoir à apprendre une syntaxe de
templates dédiée -- juste du JavaScript.

En deuxième argument, `template()` accepte un objet d’options.  Une
des options que j’aime beaucoup et que je voudrais vraiment vous montrer
s’appelle `imports`.  Avec cette option, vous pouvez définir un objet
dont les propriétés seront accessibles à toutes les exécutions du template,
comme variables locales.

## Exemple
```js
var ucfirst = function (str) {
    var f = str.charAt(0).toUpperCase();
    return f + str.substr(1);
};

_.template('Bonjour <%= ucfirst(foo) %>',
    { 'imports': { 'ucfirst': ucfirst } })({foo: "mike"});
// Bonjour Mike
```

Pas mal, hein ?

`template()` a de nombreuses options supplémentaires ; vous pouvez les
découvrir dans la documentation :

  [Lo-Dash docs](http://lodash.com/docs#template).

## Votre mission

Nous avons une structure JSON avec plusieurs tâches à faire :

```js
{ "Tom": [
    {
      "todo": "Clean kitchen",
      "date": "2014-08-19T12:13:20.207Z"
    },
    {
      "todo": "Lean Lo-Dash",
      "date": "2014-08-10T12:13:20.210Z"
    },
    {
      "todo": "Become a Lo-Dash master",
      "date": "2014-08-12T12:13:20.210Z"
    }
  ],
  "Tim": [
    {
      "todo": "Contibute to an Open-Sorce-Project",
      "date": "2014-08-11T12:13:20.210Z"
    }
  ]
}
```

Nous voulons créer une liste simple à base de `<ul>` et `<li>`,
avec toutes nos tâches dedans.  Mais, en plus du code HTML de base,
nous voulons :

- Trier la liste des tâches par date croissante ;
- Ajouter un « `<b>URGENT</b>` » au début de chaque `<li>` dont la date n‘est pas plus de 2 jours dans le futur.

Le HTML produit devrait ressembler à ça :


```html
<ul>
    <li>Tom
    <ul><li><b>URGENT</b> Apprendre Lo-Dash</li>
        <li>Devenir un maître Lo-Dash</li>
        <li>Nettoyer la cuisine</li>
    </ul>
    </li>
    <li>Tim
    <ul><li><b>URGENT</b> Contribuer à un projet open-source</li>
    </ul>
    </li>
</ul>
```

## Base de travail

Votre solution doit être un module avec la structure suivante :

```js
// On requiert Lo-Dash
var _ = require("lodash");

function generateListHTML(/* arguments */) {
    // Faites votre boulot ici, renvoyez les bonnes données
};

// Exportez la fonction hors du module
module.exports = generateListHTML;
```

**{appname}** appellera votre fonction et la testera avec divers arguments.
