import { Router } from "express";
import { agregarCategorias, listarCategorias, actualiarCategorias, elimianrCategorias } from "./categoria.controller";

const router = Router();

router.post("/agregarCategoria/:uid", agregarCategorias);

router.get("/listarCategorias", listarCategorias);

router.put("/actualiarCategoria/:uid/:cid", actualiarCategorias);

router.patch("/eliminarCategoria/:uid/:cid", elimianrCategorias)