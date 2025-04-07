const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));  

app.post('/sumar-matrices', (req, res) => {
    const { matriz1, matriz2 } = req.body;

   
    if (matriz1.length !== matriz2.length || matriz1[0].length !== matriz2[0].length) {
        return res.status(400).json({ error: 'Las matrices deben tener las mismas dimensiones' });
    }

 
    const resultado = matriz1.map((fila, i) => 
        fila.map((valor, j) => valor + matriz2[i][j])
    );

    res.json({ resultado });
});

app.listen(port, () => {
    console.log(`Servidor corriendo correctamente en: http://localhost:${port}`);
});
