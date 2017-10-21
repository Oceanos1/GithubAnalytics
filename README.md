# Github Analytics

Notre projet consiste à analyser les pull requests du repository angular/angular.js et d'afficher certaines informations importantes le concernant.

La première analyse est de regarder grâce à un graphe la durée pendant laquelle les pull requests sont restés ouverte.

**//AWDOANDOINAWODINAWD ON AFFICHERA AUSSI LE TEMPS MOYEN DES PULL REQUESTS OUVERTES**

La dernière analyse consiste à identifier les pull requests ouverte depuis un certain temps afin de les prioriser. C'est pourquoi nous avons implémenté un affichage des dix plus longues pull requests ouvertes.

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

Heroku fait un appelle à cette classe tous les jours
### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

https://edwardransome.github.io/GithubAnalytics_Client/


## Authors

* **Edward Ransome** 
* **Michael Spierer**
