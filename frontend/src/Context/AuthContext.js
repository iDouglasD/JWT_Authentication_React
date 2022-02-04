import React, { createContext, useState, useEffect } from "react";

import api from "../api";
import history from "../history";

const Context = createContext();

function AuthProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        }
        setLoading(false);
    }, []);

    async function handleLogin() {
        const {
            data: { token },
        } = await api.post("/authenticate");

        localStorage.setItem("token", JSON.stringify(token));
        api.defaults.headers.Authorization = `Bearer ${token}`;
        history.push("/users");
        setAuthenticated(true);
    }

    function handleLogout() {
        setAuthenticated(false);
        localStorage.removeItem("token");
        api.defaults.headers.Authorization = undefined;
        history.push("/login");
    }

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <Context.Provider
                value={{ authenticated, handleLogin, handleLogout }}
            >
                {children}
            </Context.Provider>
        </div>
    );
}

export { Context, AuthProvider };
