'use client';
import React, { createContext, useContext, useEffect, useState} from 'react'
import { Gasto } from '../models/Gasto';

export const GastoContext = createContext({
    presupuesto: 0,
    setPresupuesto: (valor: number) => {},
    gastos: [] as Gasto[],
    categorias: [] as string[],
    agregarGasto: (Gasto: Gasto) => {},
    obtenerGastos: ( )=> {},
    agregarCategoria: (nombre: string) => {},

    totalGastado: 0,
    porcentajeGastado: 0,
    estadoPresupuesto: 'ok'
});
