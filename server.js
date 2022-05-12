const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

// A PARTIR DE AQUÍ, ESTAN TODOS LOS ENDPOINTS

app.get('/explorers', async (req, res) => {
    const allExplorers =  await prisma.explorer.findMany({});
    res.json(allExplorers);
  });

  
// Y AQUÍ TERMINAN LOS ENDPOINTS


app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});