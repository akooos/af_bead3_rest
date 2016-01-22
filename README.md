Web Applications Development Homework 3

# Követelményanalízis

## Funkcionális követelmények

- REST szerver

## Nem funkcionális követelmények

- Biztonságos működés: jelszavak tárolása, funkciókhoz való hozzáférés
- Gyors

### Végpontok

| Kérés| Útvonal           | Leírás                                           |
|------|-------------------|--------------------------------------------------|
| GET  | /                 | metaadatok                                       |
| GET  | /users            | felhasználól                                     |
| GET  | /classes         |  tantárgyak                                       |

# Implementáció

##Fejlesztői környezet bemutatása

###Könyvtárstruktúrában lévő mappák és fájlok funkiójának bemutatása:

| Útvonal                  | Leírás                                            |
|--------------------------|---------------------------------------------------|
| /.db                     | adatok tárhelye                                   |


# Felhasználói dokumentáció

## A futtatáshoz ajánlott hardver-, szoftver konfiguráció

###Server oldalon: 

- Op. rendszer: Windows/Linux...(Linux ajánlot)
- NodeJS

###Kliens oldalon: 
- Tetszőleges HTTP/1.1 kliens, amely képes JSON formátumú adatokat fogadni

##Telepítés lépései

###Linux-on

####Következő csomagok(programok) szükségesek: `nodejs`

`cd /installation/path`

`git clone <git repository url>`

`npm install express –save`

`npm install fortune --save`

`npm install fortune-json-api --save`

`npm install fortune-nedb --save`


####Szerver indítása:

`node server.js`
=======

