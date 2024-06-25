import express from 'express'

const app = express()

app.get('/',(_request,response)=>{
    return response.send('Estas en la URL principal')
})

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.send('Bienvenido a la página principal');
});

app.get('*', (req, res) => {
    res.status(404).render('404');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});