import http from "node:http";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.URL_BASE_DATOS;
console.log(uri);
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);
const dbName = client.db(process.env.DB_NAME);
await client.connect();
console.log("Pinged your deployment. You successfully connected to MongoDB!");


function createServer() {
    const servidor = http.createServer(async (req, res) => {
      const metodo = req.method;
      const url = req.url;
        if(url === "/autores") {
          switch (metodo) {
            case "GET":
              console.log("obtener autores");
              console.log(await getAuthors());
              res.statusCode = 200;
              res.end(JSON.stringify(await getAuthors()));
              break;
            case "POST":
              const autor = {
                nombre: "julio",
                apellido: "verne",
                edad: 60
              };
              const respuesta = {
                success: "ok",
                data: autor,
                response: await createAuthor(autor),
              };
              res.statusCode = 201;
              res.end(JSON.stringify(respuesta));
             break;
            default:
             break;
          }
        }else{
            res.statusCode = 404;
            res.end("Recurso no encontrado");
        }
      });
    /*servidor escuchando*/
const puerto = process.env.PUERTO_BACKEND = 3000;

servidor.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto:${puerto}...`);
});
}

async function createAuthor(autor) {
  const coleccion = dbName.collection("autor");
  const resultado = await coleccion.insertOne(autor);
  return resultado;
}

async function getAuthors(){
      const coleccion = dbName.collection("autor");
      const query = await coleccion.find().toArray();
      return query;
}
function main(){
  createServer();
}

main();