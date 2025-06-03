
import express, {  Request, Response } from "express";
import fs from "fs";
import path from "path";
import { client } from "../config/mongodb";
export const todosRouter = express.Router();
const filePath = path.join(__dirname, "../../../db/todo.json");


todosRouter.get("/",async (req: Request, res: Response) => {
 const db = await client.db("todosDB");
    const collection=await db.collection("todos")
   
const cursor = collection.find({})
const todos = await cursor.toArray()
  res.json(todos)
});

todosRouter.post("/create-todo",async (req: Request, res: Response) => {
   const {title,description,priority}=req.body;
  const db = await client.db("todosDB");
    const collection=await db.collection("todos")
   await collection.insertOne({
      title:title,
      description:description,
      priority:priority,
      isCompleted:false
     })
const cursor = collection.find({})
const todos = await cursor.toArray()
  res.json(todos)
});

todosRouter.get("/title", (req: Request, res: Response) => {
  const { title, body } = req.body;
  // console.log(title,body)
  res.send("create from router");
});
todosRouter.put("/update-todo/:title", (req: Request, res: Response) => {
  const { title, body } = req.body;
  // console.log(title,body)
  res.send("create from router");
});
todosRouter.put("/delete-todo/:title", (req: Request, res: Response) => {
  const { title, body } = req.body;
  // console.log(title,body)
  res.send("create from router");
});