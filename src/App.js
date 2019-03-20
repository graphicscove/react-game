import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
    constructor() {
        super()
        const state = {};
        this.setState({
            resources: gameData.resources
        });
    }
    componentDidMount() {
        console.log(this.state);
        // this.state.resources = gameData.resources
        // console.log(this.props);
        this.resourceTimer = setInterval(
            // () => this.resourceMultiplier(),
            1000
        );
    }

    componentWillUnmount() {
      clearInterval(this.resourceTimer);
    }

    resourceMultiplier() {

        // "production": 30 * "Level" * 1.1^ "Level",
        for(var material in gameData.resources) {
            console.log(material);
              gameData.resources[material].value = gameData.resources[material].baseMultiplier * 1 * 1.1^ 1
              console.log(gameData.resources);
        }
    }

    render() {
        return (
            <>
                <header className="header">
                    <CityInfo name={gameData.name} location={gameData.location} />
                </header>
                <section className="section resources">
                    <Resources resources={gameData.resources} />
                </section>
                <section className="section">
                    <nav>
                        <ul className="navigation">
                            <li><a href="/">Overview</a>&nbsp;</li>
                            <li><a href="/buildings">Buildings</a>&nbsp;</li>
                            <li><a href="/research">Research</a>&nbsp;</li>
                            <li><a href="/troops">Troops</a>&nbsp;</li>
                            <li><a href="/marketplace">Marketplace</a>&nbsp;</li>
                            <li><a href="/quests">Quests</a>&nbsp;</li>
                        </ul>
                    </nav>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Overview} />
                            <Route path="/buildings" component={Buildings} />
                            <Route path="/research" component={Research} />
                            <Route path="/troops" component={Troops} />
                            <Route path="/marketplace" component={Marketplace} />
                            <Route path="/quests" component={Quests} />
                        </Switch>
                    </BrowserRouter>
                </section>
                <footer className="footer"></footer>
            </>
        );
    }
}

export default App;
