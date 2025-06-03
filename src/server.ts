import { MongoClient, ServerApiVersion } from "mongodb";
import app from "./app";

let server;
const port = 5000;
const uri = "mongodb+srv://mongodb:mongodb@cluster0.gamza.mongodb.net/todosDB?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const bootstrap = async () => {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // const db = await client.db("todosDB");
    //  const collection=await db.collection("todos").insertOne({
    //   title:"Mongodb",
    //   body:"Mongodb"
    //  })
   
  server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

bootstrap();
