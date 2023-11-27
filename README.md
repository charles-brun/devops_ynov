# TP typescript API sans dépendances externes

## Fonction

Simple API qui affiche les headers d'une requête GET à l'URL "/ping", et affiche un corps vide avec code 404 sur les autres routes.

## Utilisation directe sur machine locale

Créer/modifier la valeur de la variable d'environnement `PING_LISTEN_PORT` pour modifier le port d'écoute de l'API. La valeur par défaut est 3000.

Installer les dépendances typescript nécessaires :

```
npm init -y
npm i typescript --save-dev
npm i @types/node --save-dev
```

Utiliser la commande `npm start` pour démarrer le serveur.

## Utilisation sur Docker

Installer Docker sur la machine.

Construire une image [image_name] à partir de l'un des deux Dockerfiles : `docker build -f [dockerfile_name] -t [image_name] .`

Démarrer le serveur au numéro de port souhaité [wanted_listen_port]: `docker run -it -p [wanted_listen_port]:3000 [image_name]`
