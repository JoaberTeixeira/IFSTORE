import conexao from "../config/conexao.js"

const usuario = conexao.Schema({
    nome: 'String',
    email: 'String',
    senha: 'String',
    foto: 'String',
    endereco: 'String',
    telefone: 'string',
    cpf: 'string',
    admin: 'boolean',
})

export default conexao.model('Usuario', usuario)