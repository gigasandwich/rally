# Quoi
## Objectif
- Mamoka ny distance totale parcourue a l'instant t ana voiture

## Donnees
- x0 (taiza no niainga)
- v0 (vitesse initiale)
- gamma max (acceleration positive: 100%)
- delta max (deceleration), lasa negatif anaty calcul
- capacite max an le voiture
- c0 (capacite initiale)
- consommation a 100% d'acceleration: L/s
    - frein tsy mandany essence

- Afaka manao replay (par rapport @ donnee any @ base)

# Comment
- Miinserer an tony rehefa miaccelerer na midecelerer na manala pedale
    - vitesse initiale
    - acceleration
    - temps debut an le izy

## TO DO
- Initialisation @ langage (syntaxe, interface)
- Mandamina `access` (nb: tsy maintsy ODBC)

### Convention
- Langue: francaise
    - anarana variable, fonction, base

- Ecriture
    - Variable: snake
    - Fonction: camel

- Commentaire: 
    - Francais + Malagasy

- GITHUB:
    - ex branche:
        - feature/bocdom/aiguille
    - ex commit:
        - add: css
        - fix: variable name

### Front-end
- Ilay contour
    - kilometrage: km/h vitesse (division)
    - aiguille na jauge

- Jauge d'Essence

- Misafidy ny temps de recharge (ilay any @ base), misafidy temps debut

### Back-end
<!-- Yvan -->
- Creation base:
```SQL
    - Voiture
        - id INT PRIMARY KEY
        - nom VARCHAR(100)
        - acceleration_max DECIMAL
        - deceleration_max DECIMAL
        - reservoir DECIMAL
        - consommation_essence DECIMAL
        - vitesse_max DECIMAL
    - Evenement
        - id INT PRIMARY KEY
        - id_voiture INT
        - vitesse_initiale DECIMAL
        - gamma DECIMAL (acceleration, afaka positif afaka negatif)
        - temps_debut DATETIME
``` 

### Fonctionalites
<!-- Japon -->
- misafidyVoiture()
    - manao getAll

<!-- Steeve - Poyz -->
- insertEvenement(): mikitia control, dia manampy ligne any @ table Evenement
    - calculGamma(keyboard_event)

#### Contour
<!-- Bocdom - Japon -->
- getEtatFinal()

- getVitesse(etat_final): vitesse
    - raha toa ka mbola tsi- donnee le table evenement, dia insertEvenement() 
    - alaina ny etat finale any @ base
    - ananana ny temps debut amle etat final
    - determinena ny duree an'ny le temps debut an le etat final par rapport @ temps actuel (t1-t0)
    - appliquena ny equation de la vitesse (v=gamma * t + v0) 
    - or gamma efa ananana, v0 koa, ilay t efa azo, donc azo le

<!-- Bocdom - Yvan -->
- distanceParcourue(t) (a afficher)
    - sommeDistanceParcourue avant temps t: x= 1/2(gamma)*t^2 + vo*t + xo

#### Essence (L/s)
<!-- Poyz - Steeve -->
- Mihena jauge d'essence:
    - CONDITION:
        - commande d'acceleration no voapototra
        - reservoir > 0
    - SINON:
        - PlusDEssenceException("Veuillez faire le plein")
    - REHEFA RESPECTE NY CONDITION
        - reservoir = reservoir - consommation_essence * pourcentage d'acceleration * t

### Derniere priorites
<!-- Bocdom - Yvan - Japon -->
- replay(event):
    - Misafidy t1 a t2 (fenetre hafa)
<!-- Poyz -->
- cheadCode(fonctionalite) RESET
<!-- Steeve -->
- CRUD voiture
<!-- Yvan -->
- Accelerateur - Frein

# Project structure (note fotsiny)
## root folder
```bash
npm init -y
```

## backend folder
```bash
cd backend
npm init -y
npm install express cors dotenv
cd ..
```

Raha te handefa an le server dia:
```bash
npm start
```

## fronted folder
```bash
npx create-vite frontend --template react
cd frontend
npm install
npm install --save-dev vite
```