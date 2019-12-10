import * as express from "express";

const PORT = 8080; // Porta do nosso servidor web

const app = express(); // Criamos uma instância do express

// Adicionamos uma rota de teste
app.get("/hello-world", (req: express.Request, res: express.Response) => {
  res.json({
    message: "Hello World",
  });
});

// Adicionamos uma rota de teste com parametros
app.get("/hello-world/:nome", (req: express.Request, res: express.Response) => {
  const { nome } = req.params;
  res.json({
    message: `Olá ${nome}!`,
  });
});

// Iniciamos nosso servidor web
app.listen(PORT, () => {
  console.log(`Aplicação escutando na porta ${PORT}`);
});
