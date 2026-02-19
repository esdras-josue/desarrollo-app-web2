'use client';
import React ,{ useContext, useState } from 'react'
import { Plantilla } from '../models/Plantilla';
import { ContextLogin } from '../context/ContextLogin';

export default function ProviderLogin({ children}: Plantilla) {

    const [userName, setNombreUsuario] = useState('');
    const [password, setPassword] = useState('');

  return (
      <ContextLogin.Provider value={{userName, password,setNombreUsuario,setPassword}}>
            {children}
      </ContextLogin.Provider>
  )
}

export const useContextLogin = () => {
    return useContext(ContextLogin);
}
