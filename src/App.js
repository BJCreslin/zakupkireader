import React from 'react';
import './App.css';
import Header from "./components/heaader/Header";
import Repair from "./components/content/repair/Repair";
import RepairsContainer from "./components/content/repair/RepairsContainer";

function App() {
    return (
        <div>
            <Header/>
            <RepairsContainer/>
        </div>
    );
}

export default App;
