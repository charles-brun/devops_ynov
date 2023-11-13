# TP typescript API sans dépendances externes

## Fonction

Simple API qui affiche les headers d'une requête GET à l'URL "/ping", et affiche un corps vide avec code 404 sur les autres routes.

## Utilisation

Créer/modifier la valeur de la variable d'environnement `PING_LISTEN_PORT` pour modifier le port d'écoute de l'API. La valeur par défaut est 3000.

Installer les dépendances typescript nécessaires :

```
npm init -y
npm i typescript --save-dev
npm i @types/node --save-dev
```

Utiliser la commande `npm start` pour démarrer le serveur.
