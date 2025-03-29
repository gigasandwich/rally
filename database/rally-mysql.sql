DROP DATABASE IF EXISTS rally;
CREATE DATABASE rally;
use rally;

CREATE TABLE voiture (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100),
    acceleration_max DECIMAL,
    deceleration_max DECIMAL,
    reservoir DECIMAL,
    consommation_essence DECIMAL,
    vitesse_max DECIMAL
);

CREATE TABLE evenement (
    id INT PRIMARY KEY,
    id_voiture INT,
    vitesse_initiale DECIMAL,
    gamma DECIMAL,  -- acceleration, mety positif mety negatif
    temps_debut DATETIME,
    FOREIGN KEY (id_voiture) REFERENCES voiture(id)
);

-- Nasiko id ihany amzay mora hita
INSERT INTO voiture (id, nom, acceleration_max, deceleration_max, reservoir, consommation_essence, vitesse_max) VALUES
(1, 'TCXR', 5, 10, 50, 1, 200),
(2, 'Citroen Berlingo', 5, 4, 60, 1, 220),
(3, 'MineCart', 10, 20, 70, 1, 240);