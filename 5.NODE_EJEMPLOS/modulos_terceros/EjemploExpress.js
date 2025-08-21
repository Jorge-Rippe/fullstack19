import express, { json }  from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PUERTO_BACKEND;

app.use(json());
const autores =[
   { nombre: "Gabriel Garcia Marquez", apellido: "Garcia", edad: 87 },
   { nombre: "J.K. Rowling", apellido: "Rowling", edad: 56 },
   { nombre: "George R.R. Martin", apellido: "Martin", edad: 73 }
]
app.get('/autores', (req, res) => {
  res.status(200).json (autores)
})
app.post("autores", (req, res) => {
    const body = req.body;
    autores.push(body);
    res.status(201).json(body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
