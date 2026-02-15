import React from 'react'
import { Props } from '../modelos/Props'
import { useProducto } from '../providers/ProviderProducto'

export default function EliminarCarrito({idCarrito}: Props) {
  const { obtenerCarrito } = useProducto();

  async function eliminar() {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/carrito/${idCarrito}`,{
        method: 'DELETE'
      });

      await obtenerCarrito();
  }
  return (
    <button className='btn btn-danger' onClick={eliminar} type='button'>Eliminar Carrito</button>
  )
}
