import express from 'express';
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set(express.urlencoded({extended: true}),)

//criar usuario
app.get('/cadastro', function (req, res)=> {
    res.render('cadastro')
});
app.listen(port);