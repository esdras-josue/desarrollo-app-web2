import { createContext } from "react"
import { Producto } from "../modelos/Producto"
import { Carrito } from "../modelos/Carrito"

//producto
//carrito 
//agregarCarrito
export const ContextProducto= createContext({
    producto: [] as Producto[],
    carrito: [] as Carrito[],
    agregarCarrito: (producto:Producto) =>{},
    obtenerCarrito: () =>{},
    obtenerProductos: () =>{}
})