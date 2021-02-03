import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/test">Test</Link>
                    </li>
                </ul>

                <hr/>

                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard/>
                    </Route>
                    <Route path="/test">
                        <div>
                            <h2>Test was clicked</h2>
                        </div>
                    </Route>
                </Switch>

                <hr/>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <h2>Home was clicked</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About was clicked</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard was clicked</h2>
        </div>
    );
}