const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

// Configuração do banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'server_sql'
});

connection.connect();

// Middleware para analisar corpos de solicitação
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Habilitar o CORS
app.use(cors());

// Rota para lidar com o envio do formulário
app.post('/enviar-formulario', (req, res) => {
  const { nome, email, celular, msg } = req.body;

  const query = 'INSERT INTO formulario (nome, email, celular, msg) VALUES (?, ?, ?, ?)';
  connection.query(query, [nome, email, celular, msg], (error, results, fields) => {
    if (error) {
      console.error('Erro ao inserir dados:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
      return;
    }

    console.log('Dados inseridos com sucesso:', results);
    res.status(200).json({ success: true });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
