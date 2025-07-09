console.log("Iniciando servidor...");
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Sirve archivos desde carpeta "public"
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.send('Servidor activo 🚀');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
