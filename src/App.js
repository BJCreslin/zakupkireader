import React from 'react';
import './App.css';
import Header from "./components/heaader/Header";
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
