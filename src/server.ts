
import app from "./app";
import { client } from "./app/config/mongodb";

let server;
const port = 5000;


const bootstrap = async () => {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
   
   
  server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

bootstrap();
