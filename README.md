# Logiciel RefWebLogiciel

Ce projet a été réalisé durant la période de stage du Lundi 31 janvier 2022 au 11 février 2022, il a été fait par Nicolas Romanetti et Maxime Huard

## Techno utilisées

Angular 13  Electron et Nebular pour la structure

## Comment lancer l'application

angular : 
``` 
ng serve 
```


electron :  
``` 
npm run start:electron 
``` 

## Déscription du projet

REFWEBSOFTWARE_FRONT est la partie front-end de l'application RefWebLogiciel, cette application a pour but principal une gestion de planning de tâches pour les développeurs avec une repartition automatique des tâches suivant la spécialisation et le niveau du dev.

L'autre particularité de l'appli est de pouvoir génerer pour un client un devis deun projet contenant une liste de tâches préselectionnés, et une fois le devis validé par le client, lancer la mise en prod du projet avec les diffèrentes tâches...

## Principe de fonctionnement de l'application

Nous allons maintenant décrire de la manière la plus simple possible le parcour utilisateur sur l'appli, sachant du peu de temps que nous disposions, nous avons designé 2 utilisateurs distincs:

- L'admin qui gere la modération des clients, utilisateurs, specialisations, types de projets, des devis, des modèles de tâches et du planning.

- Le dev lui accede à a liste de tâches qui lui on été attribuées et peut modifié leur status sur 3 points : à faire, en cour, fini.


L'admin commence donc par generer un devis, pour ça il a besoin de selectionner un type de projet, un client et une liste de modèles de tâches. Une fois validé ceci créera donc un devi et il aura 2 possibilités, le supprimer ou lancer le projet. En lancant le projet ceci va souscrire à 2 méthodes séparées d'un delai, la première va permettre de créer le projet et les tâches, la deuxième va permettre d'aller chercher les developpeurs pour les dispatchés sur les taches en question.


## Visuel

accueil
![ACCEUIL](https://i.ibb.co/kmgGhmJ/aceuilrefweb.png)


bloc principal
![ACCEUIL](https://i.ibb.co/XL1Jms8/contentrefweb.png)

Comme on peut le constater sur l'image ci-dessus, la structure visuelle de l'application est tres simple, elle divisé en 3 blocs:

- Un bloc sidebar fixe qui affiche un menu de navigation, celui ci nous sert à naviguer entre les différents component, peut importe la destination de l'url, ce bloc ne change jamais.

- Un deuxième bloc sidebar qui liste tous les elements en rapport avec ce qui a été choisi dans le menu, pour reprendre l'exemple de l'image, nous pouvons constater qu'apres avoir selections utilisateur dans le menu, ceci à charger le component user dans le deuxieme bloc et ainsi requeter automatiquement à la generation du component pour afficher les user du serveur.
Pour finir avec ce bloc il dispose d'un champ de recherche pour filter la liste affichée avec les caractères rentrés, ceci vaut pour tous les services à l'exception de specialisation. 

- Le Troisème et dernier bloc quand à lui nous sert aussi bien à obtenir des information supplémentaire d'un element préalablement cliqué dans la liste (getById()), que d'afficher un formulaire pour la creation ou la mise à jour d'elements.

## Structure


![STRUCTURE](https://i.ibb.co/NSmJGWs/structure-refweb.png)


Nous avons structuré Angular ansi : 

Un dossier software qui contient tous nos component principaux, chaque dossier equivaut à une micro API, et chacun de ses dossiers son propre service et 4 components :

- component-list pour lister tous les elements
- component-detail pour afficher les details d'un element en particulier
- component-writing pour afficher un formulaire de creation
- component-update pour afficher un formulaire de mise à jour d'element

Un dossier Template, qui contient 3 dossiers, correspondant aux 3 bloc de notre appli, il n'a aucune couche métier , pas de services, Template nous a permis de mieux structurer le code et ainsi de faciliter l'affichage de nos diffèrents component.