import autores from "../models/Autor.js";

class AutorController {

    static listarAutores = (req, res) => {
        autores.find((error, autores) => {
            res.status(200).json(autores)
          })  
    }

    static listarAutoresId = (req, res) => {

        const id = req.params.id;

        autores.findById(id,(erro, autores) => {     

        if(erro){
            res.status(400).send({message: `${erro.message} - Id do Autor não localizado.`})
        }
        else{
            res.status(201).send(autores);
            }        
          })  
    }

    static CadastrarAutores = (req, res) => {
        let autor = new autores(req.body) 

        autor.save((erro) => { 
        if(erro){
            res.status(500).send({message: `${erro.message} - falha ao cadastrar Autor.`})
        }
        else{
            res.status(201).send(autor.toJSON()) 
        }        
    }) 
    }

    static AtualizarAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, (erro) => {
            if(!erro){
                res.status(200).send({message: `Autor atualizado.`})
            }
            else{
                res.status(500).send({message: erro.message} ) 
            }
        })       
    }

    static ExcluirAutor = (req, res) => {

        const id = req.params.id;

        autores.findByIdAndDelete(id, (erro) => {
            if(!erro){
                res.status(200).send({message: `Autor excluído com sucesso!`})
            }
            else{
                res.status(500).send({message: erro.message} ) 
            }
        })       
    }
}

export default AutorController;
