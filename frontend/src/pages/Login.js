import React, { useContext } from "react";

import { Context } from "../Context/AuthContext";

export default function Login() {
    const { authenticated } = useContext(Context);

    return <button type="button">Entrar</button>;
}
