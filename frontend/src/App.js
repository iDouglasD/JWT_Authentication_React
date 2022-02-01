import React from "react";
import { Router } from "react-router-dom";

import Routes from "./routes";
import history from "./history";

import { AuthProvider } from "./Context/AuthContext";
import { Context } from "../Context/AuthContext";

function App() {
    return (
        <Context.Provider>
            <Router history={history}>
                <Routes />
            </Router>
        </Context.Provider>
    );
}

export default App;
