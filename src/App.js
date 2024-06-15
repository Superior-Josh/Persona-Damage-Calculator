import './App.css';
import Input from './Input.js';
import Reference from './Reference.js';
import { useState } from 'react';


export default function App() {
    return (
        <div className="App">
            <Input />
            <div className="Reference">
                <Reference />
            </div>
        </div>
    );
}

