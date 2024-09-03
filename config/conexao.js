import mongoose from 'mongoose';

const conexao = await mongoose.connect("mongodb://aluno:aluno@cluster0-shard-00-00.5zsjl.mongodb.net:27017,cluster0-shard-00-01.5zsjl.mongodb.net:27017,cluster0-shard-00-02.5zsjl.mongodb.net:27017/?ssl=true&replicaSet=atlas-135vqc-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0")
export default conexao