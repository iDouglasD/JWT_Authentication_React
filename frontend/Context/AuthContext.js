import React, { createContext } from "react";

const Context = createContext();

const AuthContext = ({ children }) => {
    return (
        <div>
            <Context.Provider value={{ authenticated: false }}>
                {children}
            </Context.Provider>
        </div>
    );
};

export { Context, AuthProvider };
