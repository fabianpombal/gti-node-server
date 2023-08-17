import { Router } from "express";
import * as methods from "../controllers/colegio.controller";

const router = Router()

router.get('/', methods.getColegios);
router.get('/:hash', methods.getColegio);
router.post('/', methods.createColegio);

export default router

