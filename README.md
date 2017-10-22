# Github Analytics

Ceci est le repositoire principal du projet Github Analytics, effectué dans le cadre du cours TWEB du semestre 5 de la formation Informatique Logiciel de la Haute-Ecole d'Ingénieurie et de Gestion du canton de Vaud (HEIG-VD).

Notre projet consiste à analyser les pull requests du repository angular/angular.js et d'afficher certaines informations importantes le concernant.

La première analyse est de regarder grâce à un graphe la durée pendant laquelle les pull requests sont restés ouverte. Ce graphe permet de voir combien de temps durent la plupart des pull request. On calcule aussi le temps moyen avant qu'une pull request soit fermée.


La dernière analyse consiste à identifier les pull requests ouverte depuis un certain temps afin de les prioriser. C'est pourquoi nous avons implémenté un affichage des dix pull request ouvertes le plus longtemps.

## Structure du projet

Pour ce projet, nous avons crée deux repositories:

### Partie client
https://github.com/edwardransome/GithubAnalytics_Client

Le dossier `/docs/` contient les fichiers nécessaires à l'affichage de la page web par Github Pages. Le fichier `index.html` est l'unique page web utilisée. Le thème du site à été pris de [Startbootstrap](https://startbootstrap.com/template-overviews/grayscale/). Le fichier javascript effectuant l'affichage du graphe avec [Chart.js](http://www.chartjs.org/) est le fichier `/js/analytics.js`. Les autres fichiers sont issus du thème Bootstrap.

Les données utilisées sont stockées dans le fichier `/json/angular_angular.js.json`. 

### Partie agent
https://github.com/Oceanos1/GithubAnalytics/

Dans cette partie, il y a trois classes Javascript:

**agent.js**

Cette classe est largement inspirée des webcasts TWEB 2017. Elle utilise superagent afin de récuperer la liste de toutes les pull requests grâce à une requete.

**storage.js**

Cette classe est aussi largement inspirée des webcasts. Elle permet de push du contenu sur un repo Git.

**main.js**

Heroku fait appelle à cette classe tous les jours à 22h30 UCT (la tâche lancée est `/bin/launchAgent`). Elle crée un tableau contenant les pullRequests formatés, c'est-à-dire gardant uniquement les informations pertinantes, et les push sur le repository du client. Tous les jours, on remplace donc automatiquement les données utilisées par notre site par des données à jour.


## Déploiement

Les analyses sont disponible sur :

https://edwardransome.github.io/GithubAnalytics_Client/


## Auteurs

* **Edward Ransome** 
* **Michael Spierer**
