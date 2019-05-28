import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.sass';
import gameData from './data.json';
import Resources from './components/Resources.js';
import CityInfo from './components/CityInfo.js';
import Overview from './components/Overview.js';
import Buildings from './components/Buildings.js';
import Research from './components/Research.js';
import Troops from './components/Troops.js';
import Marketplace from './components/Marketplace.js';
import Quests from './components/Quests.js';

class App extends Component {
    resourceMultiplier() {
        for(var material in gameData.resources) {
              gameData.resources[material].value = gameData.resources[material].baseMultiplier * 1 * 1.1^ 1
        }
    }

    render() {
        console.log(gameData);
        return (
            <>
                <header className="header">
                    <CityInfo name={gameData.name} location={gameData.location} />
                </header>
                <section className="section resources">
                    <Resources resources={gameData.resources} />
                </section>
                <section className="section">
                <Router>
                    <nav>
                        <ul className="navigation">
                            <li><Link to="/">Overview</Link>&nbsp;</li>
                            <li><Link to="/buildings">Buildings</Link>&nbsp;</li>
                            <li><Link to="/research">Research</Link>&nbsp;</li>
                            <li><Link to="/troops">Troops</Link>&nbsp;</li>
                            <li><Link to="/marketplace">Marketplace</Link>&nbsp;</li>
                            <li><Link to="/quests">Quests</Link>&nbsp;</li>
                        </ul>
                    </nav>
                    <Route exact path="/" component={Overview} />
                    <Route path="/buildings" component={Buildings} />
                    <Route path="/research" component={Research} />
                    <Route path="/troops" component={Troops} />
                    <Route path="/marketplace" component={Marketplace} />
                    <Route path="/quests" component={Quests} />
                    </Router>
                </section>
                <footer className="footer"></footer>
            </>
        );
    }
}

export default App;
