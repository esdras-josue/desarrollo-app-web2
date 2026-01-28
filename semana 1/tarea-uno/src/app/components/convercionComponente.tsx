import React from 'react'
import { Temperatura } from '../interfaces/Temperatura';

export default function convercionComponente({celsius}: Temperatura) {

  // crear un objeto con las formulas
  
  return (
    <div>
      <ol>
        <li>Celcius: {celsius}</li>
        <li>Celcius a Fahrenheit: {celsius * 9/5 + 32}</li>
        <li>Celcius a Kelvin: {celsius + 273.15}</li>
      </ol>
    </div>
  )
}
