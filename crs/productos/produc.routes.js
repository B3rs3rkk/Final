import { Route } from "express";
import { actualizarProductos, eliminarProducto } from "./productos.controller.js";
import { actualizarProductoValidator, eliminarProductoValidator } from "../middlewares/producto-validator.js";


const router = Route()

router.patch("/actualizarProducto/:uid", actualizarProductoValidator, actualizarProductos)
router.delete("/eliminarProducto/:uid", eliminarProductoValidator, eliminarProducto)

export default router