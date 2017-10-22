# Github Analytics

Ceci est le repositoire principal du projet Github Analytics, effectué dans le cadre du cours TWEB du semestre 5 de la formation Informatique Logiciel de la Haute-Ecole d'Ingénieurie et de Gestion du canton de Vaud (HEIG-VD).

Notre projet consiste à analyser les pull requests du repository angular/angular.js et d'afficher certaines informations importantes le concernant.

La première analyse est de regarder grâce à un graphe la durée pendant laquelle les pull requests sont restés ouverte. Ce graphe permet de voir combien de temps durent la plupart des pull request. On calcule aussi le temps moyen avant qu'une pull request soit fermée.


La dernière analyse consiste à identifier les pull requests ouverte depuis un certain temps afin de les prioriser. C'est pourquoi nous avons implémenté un affichage des dix pull request ouvertes le plus longtemps.

## Structure du projet

Pour ce projet, nous avons crée deux repositories:

Pour la partie client :
https://github.com/edwardransome/GithubAnalytics_Client

Concernant la partie client, **BLABLABLA ECRIT ICI EDDIE**

et pour la partie agent:
https://github.com/Oceanos1/GithubAnalytics/

Dans cette partie, il y a trois classes javascripts:

**agent.js**

Cette classe est largement inspirée des webcasts TWEB 2017. Elle utilise superagent afin de récuperer la liste de toutes les pull requests grâce à une requete.

**storage.js**

Cette classe est aussi largement inspirée des webcasts. Elle permet de push du contenu sur un repo git.

**main.js**

**BLABLABLA PARLER DES VARIABLES D'ENVIRONNEMENTS**

Heroku fait appelle à cette classe tous les jours à minuit (il la reveille en faisant un node main.js). Elle crée un tableau contenant les pullRequests formatés, c'est-à-dire gardant uniquement les informations pertinantes, et les push sur le git.

On notera que au jour d'aujourd'hui, il y a actuellement 7597 pullRequests sur angular/angular.js et par conséquent, mettre à jour le git met un certain temps. Cependant, ce n'est pas très important pour un utilisateur lambda car il a accès aux anciennes informations pendant la mise à jour.

### Lancement



### Linter

Nous avons utilisé ESLint pour avoir un code propre. Le code sur le repo de l'agent ne contient pas d'erreur de linter. Cependant, sur le repo du client, comme celui-ci dépend de l'html, il y a certaines erreur que l'on ne peut éviter. Par exemple, ```document``` ne sera pas défini alors qu'il l'est lorsque le script est lancé.


## Déploiement

https://edwardransome.github.io/GithubAnalytics_Client/


## Authors

* **Edward Ransome** 
* **Michael Spierer**
