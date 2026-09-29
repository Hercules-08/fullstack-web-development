const express = require('express');
    const app = express();
    app.get('/', (req, res) => {
        res.send('Hello World');
    
    });
    app.listen(3000, () => {
        console.log('Servidor a rodar a porta 3000');
    });

    app.use(express.json());
        app.use((req, res, next) => {
            console.log(`Requisição recebida: ${req.method} ${req.url}`);
            next();
        })
    app.get('/sobre', (req, res) => {
        res.send('Esta é a minha API');
    });