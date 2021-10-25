const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 3001;

const leilaoController = require('./controllers/leilaoController');
const app = express();
const http = require('http').createServer(app);
/* const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
}); */
app.use(bodyParser.json());
app.use(cors());

app.use('/leilao', leilaoController);
require('./sockets/votes')(io);

app.listen(port, () => console.log(`Rodando na porta ${port}`));