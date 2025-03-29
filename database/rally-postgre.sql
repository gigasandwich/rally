CREATE TABLE Voiture (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(100),
    acceleration_max DECIMAL,
    deceleration_max DECIMAL,
    reservoir DECIMAL,
    consommation_essence DECIMAL,
    vitesse_max DECIMAL
);

INSERT INTO Voiture (id, nom, acceleration_max, deceleration_max, reservoir, consommation_essence, vitesse_max) 
VALUES
(1, 'TCXR', 5, 10, 50, 1, 200),
(2, 'Citroen Berlingo', 5, 4, 60, 1, 220),
(3, 'MineCart', 10, 20, 70, 1, 240);

CREATE TABLE Evenement (
    id SERIAL PRIMARY KEY,
    id_voiture INT,
    vitesse_initiale DECIMAL,
    gamma DECIMAL, 
    temps_debut TIMESTAMP, 
    FOREIGN KEY (id_voiture) REFERENCES Voiture(id)
);
