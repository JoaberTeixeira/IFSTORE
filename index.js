import express from 'express';
const app = express();
const PORT = 3000 

app.set ('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

import usuario from './models/usuario.js';

app.get('/cadastro',(req,res)=>{
    res.render('cadastro')
})

app.post('/cadastro', async (req, res) => {
    /* const nome = req.body.nome;
     const email = req.body.email;
     const senha = req.body.senha;
     const endereco = req.body.endereco;
     const foto = req.body.foto;
     const telefone = req.body.telefone;
     const cpf = req.body.cpf;
     const admin = req.body.admin;
  */
     const admin = req.body.admin == "on" ? true : false; 
     const novoUsuario = new usuario({
          nome : req.body.nome,
          email : req.body.email,
          senha : req.body.senha,
          foto : req.body.foto,
          telefone : req.body.telefone,
          cpf : req.body.cpf,
          admin : admin ,
     });
  
     await novoUsuario.save();
     res.send("Cadastrado com sucesso!")
  
  })
//const newUsuario = new usuario(req.body)

app.listen(PORT);