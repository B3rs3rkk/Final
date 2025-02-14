import { Schema, model } from "mongoose";

const productSchema = Schema({
    nombre:{
        type: String,
        required: [true, "El nombre es requerido"],
        maxLength: [25, "Solo menos de 25 caracteres"]
    },
    descripcion:{
        type: String,
        required:[true, "La descripción es requerida"],
        maxLength: [100, "Solo menos de 100 caracteres"]
    },
    precio:{
        type: Number,
        required:[true, "El precio es requerido"],
    },
    stock:{
        type: Number,
        required:[true, "El stock es requerido"],
    },
    categoria:{
        type: Schema.Types.ObjectId,
        ref: "Categoria",
        required: true
    },
    usuario:{
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        required: true
    },
    status:{
        type: Boolean,
        default: true
    }
})

export default model("Producto", productSchema)