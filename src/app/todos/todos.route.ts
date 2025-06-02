
import express, {  Request, Response } from "express";
import fs from "fs";
import path from "path";
export const todosRouter = express.Router();
const filePath = path.join(__dirname, "../../../db/todo.json");


todosRouter.get("/", (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });
  //  console.log(data)
  res.json({
    message: "message from todos route",
    data
  });
});

todosRouter.post("/create-todo", (req: Request, res: Response) => {
  const { title, body } = req.body;
  // console.log(title,body)
  res.send("create from router");
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