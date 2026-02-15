import { Producto } from "./Producto";

export interface Carrito {
    idCarrito: number;
    idProducto: number;
    totalPagar: number;
    producto: Producto;
}
