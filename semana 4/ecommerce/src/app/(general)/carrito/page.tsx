'use client'
import CardProducto from '@/app/components/CardProducto'
import EliminarCarrito from '@/app/components/EliminarCarrito'
import { Carrito } from '@/app/modelos/Carrito'
import { Producto } from '@/app/modelos/Producto'
import { useProducto } from '@/app/providers/ProviderProducto'
import React, { useEffect } from 'react'

export default function page() {

    const { carrito, obtenerCarrito } = useProducto()

    useEffect(() => {
        obtenerCarrito();
    },[]);

    return (
        <div className='content'>
            <div className='row'>
                {
                    carrito.map((item) => (
                        <div className='col-md-3' key={item.idCarrito}> <br />
                            <div className='card'>
                                <div className='card-body'>
                                 <CardProducto {...item.producto}></CardProducto>
                                </div>
                                <div className='card-footer'>
                                      <EliminarCarrito idCarrito={item.idCarrito}></EliminarCarrito>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>

        </div>
    )
}
