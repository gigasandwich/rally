import React, { useState, useEffect, useRef } from 'react';
import '../styles/Main.css';

const Main = () => {
    const [gaugeLevel, setGaugeLevel] = useState(100);
    const intervalRef = useRef(null);
    // 5% par seconde (pour l instant)
    const depletionRate = 5;

    useEffect(() => {
        const clickTouche = (e) => {
            if (e.code === 'Space' && !intervalRef.current) {
                intervalRef.current = setInterval(() => {
                    setGaugeLevel(prev => Math.max(prev - (depletionRate / 10), 0));
                }, 100);
            }
        };

        const relacheTouche = (e) => {
            if (e.code === 'Space' && intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };

        window.addEventListener('keydown', clickTouche);
        window.addEventListener('keyup', relacheTouche);

        return () => {
            window.removeEventListener('keydown', clickTouche);
            window.removeEventListener('keyup', relacheTouche);
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div className="main-container">
            <h2>Fuel</h2>
            
            <div className="gauge-wrapper">
                <div className="gauge-container">
                    <div 
                        className="gauge-fill"
                        style={{
                            height: `${gaugeLevel}%`,
                            backgroundColor: gaugeLevel > 30 ? '#4CAF50' : '#f44336'
                        }}
                    ></div>
                    <div className="gauge-label">
                        {Math.round(gaugeLevel)}%
                    </div>
                </div>
                <p className="gauge-info">
                    Maintenez ESPACE pour avancer
                </p>
            </div>
        </div>
    );
};

export default Main;