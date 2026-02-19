import { createContext } from "react";

export const ContextLogin = createContext({
    userName: '',
    password: '',
    setNombreUsuario: (usuario: string)=>{},
    setPassword: (pass: string) =>{}
});

