import livros from "../models/Livro.js";

class LivroController {

    static listarLivros = (req, res) => {
        // livros.find((error, livros) => {
        //     res.status(200).json(livros)
        //   })  

        livros.find()
            .populate('autor')
            .exec((error, livros) => {
                res.status(200).json(livros)
        })  
    }

    static listarLivrosId = (req, res) => {

        const id = req.params.id;

        livros.findById(id)
            .populate('autor')
            .exec((erro, livros) => {   
                if(erro){
                    res.status(400).send({message: `${erro.message} - Id do livro não localizado.`})
                }
                else{
                    res.status(201).send(livros);
                    }        
            })                    
    }

    static listarLivrosPorEditora = (req, res) => {

        const editora = req.query.editora;

        livros.find({'editora': editora}, {}, (err, livros) => { 
            res.status(200).send(livros);
        })
    }

    static CadastrarLivros = (req, res) => {
        let livro = new livros(req.body) 

        livro.save((erro) => { 
        if(erro){
            res.status(500).send({message: `${erro.message} - falha ao cadastrar livro.`})
        }
        else{
            res.status(201).send(livro.toJSON()) 
        }        
    }) 
    }

    static AtualizarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, (erro) => {
            if(!erro){
                res.status(200).send({message: `Livro atualizado.`})
            }
            else{
                res.status(500).send({message: erro.message} ) 
            }
        })       
    }

    static ExcluirLivro = (req, res) => {

        const id = req.params.id;

        livros.findByIdAndDelete(id, (erro) => {
            if(!erro){
                res.status(200).send({message: `Livro excluído com sucesso!`})
            }
            else{
                res.status(500).send({message: erro.message} ) 
            }
        })       
    }
}

export default LivroController;
