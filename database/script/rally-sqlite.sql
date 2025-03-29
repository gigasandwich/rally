CREATE TABLE voiture (
    id INTEGER PRIMARY KEY, 
    nom TEXT,
    acceleration_max REAL,
    deceleration_max REAL,
    reservoir REAL,
    consommation_essence REAL,
    vitesse_max REAL
);

CREATE TABLE evenement (
    id INTEGER PRIMARY KEY, 
    id_voiture INTEGER,
    vitesse_initiale REAL,
    gamma REAL, 
    temps_debut TEXT, 
    FOREIGN KEY (id_voiture) REFERENCES voiture(id)
);

INSERT INTO voiture (id, nom, acceleration_max, deceleration_max, reservoir, consommation_essence, vitesse_max) VALUES
(1, 'TCXR', 5, 10, 50, 1, 200),
(2, 'Citroen Berlingo', 5, 4, 60, 1, 220),
(3, 'MineCart', 10, 20, 70, 1, 240);