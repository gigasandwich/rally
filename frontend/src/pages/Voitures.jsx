import React, { useEffect, useState } from 'react';
import { fetchData } from '/src/utils/fetchData';

const Voitures = () => {
    const [voitures, setVoitures] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData('http://localhost:1234/api/voitures')
            .then((data) => {
                setVoitures(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching voitures data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>List of Voitures</h1>
            <ul>
                {voitures.map(voiture => (
                    <li key={voiture.id}>
                        <h2>{voiture.nom}</h2>
                        <p>Max Speed: {voiture.vitesse_max} km/h</p>
                        <p>Max Acceleration: {voiture.acceleration_max} m/s²</p>
                        <p>Max Deceleration: {voiture.deceleration_max} m/s²</p>
                        <p>Fuel Consumption: {voiture.consommation_essence} L/100 km</p>
                        <p>Fuel Reservoir: {voiture.reservoir} L</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Voitures;