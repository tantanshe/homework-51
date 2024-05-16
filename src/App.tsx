import React, { useState } from "react";
import Ball from './components/Ball/Ball';
import './App.css';

const initialNumbers = [5, 11, 16, 23, 32];

const App: React.FC = () => {
    const [numbers, setNumbers] = useState<number[]>(initialNumbers);

    const createNewNumbers = () => {
        const newNumbers = new Set<number>();
        while (newNumbers.size < 5) {
            newNumbers.add(Math.floor(Math.random() * 32) + 5);
        }
        setNumbers(Array.from(newNumbers).sort((a, b) => a - b));
    };

    return (
        <div className="App">
            <h1>Lottery "5 out of 36"</h1>
            <div className="balls-container">
                {numbers.map((number: number, index: number) => (
                    <Ball key={index} number={number} />
                ))}
            </div>
            <button onClick={createNewNumbers}>New numbers</button>
        </div>
    );
};

export default App
