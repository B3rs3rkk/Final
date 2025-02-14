import { body, param } from "express-validator";
/*import { correoExists, userExists } from "../helpers/db-validators.js";*/
import { validarCampos } from "../middlewares/validar-campos.js";
import { handleErrors } from "../middlewares/handleErrors.js";

export const registerValidator = [
    body("nombre").notEmpty().withMessage("El nombre es requerido"),
    body("precio").notEmpty().withMessage("El precio es requerido"),
    body("stock").notEmpty().withMessage("El stock es requerido"),
    body("descripcion").notEmpty().withMessage("La descripción es requerida"),
    body("categoria").notEmpty().withMessage("La categoría es requerida"),
    body("img").notEmpty().withMessage("La imagen es requerida"),
    validarCampos,
    handleErrors
];

export const actualizarProductoValidator = [
    param("id").isMongoId().withMessage("No es un ID válido de MongoDB"),
    validarCampos,
    handleErrors
];

export const eliminarProductoValidator = [
    param("id").isMongoId().withMessage("No es un ID válido de MongoDB"),
    validarCampos,
    handleErrors
];