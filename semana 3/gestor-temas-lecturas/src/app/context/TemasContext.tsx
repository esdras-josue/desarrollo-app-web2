"use client";
import React, {createContext,useContext, useEffect, useState} from 'react'
import { Temas } from '../models/Temas';

export const TemasContext = createContext({
  temas: [] as Temas[],
  marcarInteresante: (id: number) => {},
});
