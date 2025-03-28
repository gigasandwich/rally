# How to run
- Driver an le access ihany no mila telechargena en dehors an'i node JS (ankotran zay efa dispo anatin le node_modules daholo) 
    - [driver](https://www.microsoft.com/en-us/download/details.aspx?id=54920)

- Mandefa terminal, `tout sauf powershell` (git bash, cmd, ...)

- Alefa ny service an le backend @ port 1234:
```bash
cd backend
npm start
```
- Manokatra terminal vaovao 

- Alefa ny service an le frontend @ port 4321:
```bash
cd frontend
npm start
```

# Installation (note fotsiny, tsy voatery mila arahana)
## root folder
```bash
npm init -y
```

## backend folder
```bash
cd backend
npm init -y
npm install express cors dotenv msnodesqlv8 
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

## Access configuration
