import express from "express";
import LivroController from "../controllers/LivrosController.js";


const router = express.Router();

router
.get("/livros", LivroController.listarLivros)
.get("/livros/busca", LivroController.listarLivrosPorEditora)//OBS: filtros especificos sempre por ultimo. Ex id
.get("/livros/:id", LivroController.listarLivrosId)
.post("/livros",LivroController.CadastrarLivros)
.put("/livros/:id",LivroController.AtualizarLivro)
.delete("/livros/:id",LivroController.ExcluirLivro)


export default router;