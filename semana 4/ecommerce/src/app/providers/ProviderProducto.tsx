'use client'
import React, { useContext, useEffect, useState } from 'react'
import { Plantilla } from '../modelos/Plantilla'
import { Producto } from '../modelos/Producto'
import { ContextProducto } from '../context/ContextProducto';
import { Carrito } from '../modelos/Carrito';

export default function ProviderProducto(props: Plantilla) {

    const [producto, setProducto] = useState<Producto[]>([]);

    const [carrito, setCarrito] = useState<Carrito[]>([])

    async function agregarCarrito(producto: Producto) {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/carrito`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                idProducto: producto.id,
                totalPagar: producto.precioProducto
            })
        })
        alert('Producto agregado al carrito');
        await obtenerCarrito();
    }

    async function obtenerCarrito(){
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/carrito`);
        const data = await response.json();
        setCarrito(Array.isArray(data) ? data : []);
    }

    async function obtenerProductos() {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/producto`)
        const data = await response.json()
        setProducto(data)
    }

  

    return (
        <ContextProducto.Provider value={{ producto, carrito, agregarCarrito,obtenerCarrito,obtenerProductos }}>
            {props.children}
        </ContextProducto.Provider>
    )
}

export function useProducto() {
    return useContext(ContextProducto)
}


