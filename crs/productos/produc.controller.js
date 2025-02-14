import Productos from "./produc.model.js";

export const UpdateProductos = async (req, res) => {
    try{
        const {uid} = req.params;
        const data = req.body;

        const productoActualizado = await Productos.findOneAndUpdate(
        { _id: uid, rol: { $ne: "ADMIN" } }, {$set: data}, { new: true }
        );

        if(!productoActualizado){
            return res.status(403).json({
                success: false,
                message: "No se puede editar a los administradores o el producto no existe"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Producto actualizado correctamente",
            productoActualizado
        });
    }catch{err}{
        return res.status(500).json({
            success: false,
            message: "Error al actualizar producto",
            error: err.message
        })
    }
}

export const DeleteProducto = async (req, res) => {
    try{
        const { uid } = req.params
        
        const producto = await Productos.findByIdAndUpdate(uid, {status: false}, {new: true})

        if (!producto || producto.rol === "ADMIN") {
            return res.status(403).json({
                success: false,
                message: "No se puede editar a los administradores o el producto no existe"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Producto eliminado",
            producto
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error al eliminar el producto",
            error: err.message
        })
    }
}