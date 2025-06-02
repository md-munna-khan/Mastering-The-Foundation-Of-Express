import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";
const app: Application = express();

app.use(express.json());

const filePath = path.join(__dirname, "../db/todo.json");
app.get("/", (req: Request, res: Response) => {

  res.send("welcome to todos apps");
});

app.get('/todos/:title/:body', (req: Request, res: Response) => {
  console.log("from query",req.query)
  console.log("from params",req.params)
// console.log(req.params)
   const data = fs.readFileSync(filePath, { encoding: "utf-8" });
  //  console.log(data)
 res.send("welcome to todos apps");
});

app.post("/todos/create-todo", (req: Request, res: Response) => {
const {title,body}= req.body;
// console.log(title,body)
  res.send("welcome to todos apps");
});




export default app;


/**
 * Basic File structure
 * server - server handling like - starting, closing error handling of server. only related to server
 * app file - routing handle, middleware, route related error
 * app folder - app business logic handling like create read update delete, database related works
 */