import express from "express";
import AutorController from "../controllers/AutoresController.js";


const router = express.Router();

router
.get("/autores", AutorController.listarAutores)
.get("/autores/:id", AutorController.listarAutoresId)
.post("/autores",AutorController.CadastrarAutores)
.put("/autores/:id",AutorController.AtualizarAutor)
.delete("/autores/:id",AutorController.ExcluirAutor)


export default router;