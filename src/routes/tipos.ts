import { Router } from "express";
import * as methods from "../controllers/tipos.controller";

const router = Router()

router.get('/preguntas', methods.getAllTipoPreguntas);
router.get('/edades', methods.getAllTipoEdades);
router.get('/estructuras', methods.getAllTipoEstructuras);

export default router

