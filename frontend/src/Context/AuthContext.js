import React, { createContext, useState, useEffect } from "react";

import useAuth from "./hooks/useAuth";

const Context = createContext();

function AuthProvider({ children }) {
    const { authenticated, loading, handleLogin, handleLogout } = useAuth();
    return (
        <div>
            <Context.Provider
                value={{ loading, authenticated, handleLogin, handleLogout }}
            >
                {children}
            </Context.Provider>
        </div>
    );
}

export { Context, AuthProvider };
