import express from "express";
import mongoose from "./db/index.mjs";
import userRoutes from "./routes/userRoutes.mjs"
import cartRoutes from "./routes/cartRoutes.mjs"
import chalk from "chalk";
import cors from "cors";
import connectToDB from "./db/index.mjs";

//Connecting MongoDB
connectToDB()
const app = express();
let tasks = [
	{ id: '1', title: 'Task A', assignedTo: 'User1', status: 'To Do' },
	{ id: '2', title: 'Task B', assignedTo: 'User2', status: 'In Progress' },
	{ id: '3', title: 'Task C', assignedTo: 'User3', status: 'Done' },
  ];
  
  // Routes
  app.get('/api/tasks', (req, res) => {
	res.json(tasks);
  });
  
  app.post('/api/tasks', (req, res) => {
	const newTask = req.body;
	tasks.push(newTask);
	res.status(201).json(newTask);
  });
  
  app.put('/api/tasks/:id', (req, res) => {
	const { id } = req.params;
	const updatedTask = req.body;
	tasks = tasks.map(task => (task.id === id ? updatedTask : task));
	res.json(updatedTask);
  });
  
app.use(
	cors({
		origin: ['http://localhost:5174', 'http://localhost:5173'],
		methods: ['GET', 'PUT', 'POST', 'DELETE'],
		credentials: true,
	}),
);


app.use(express.json());
const port = 5000;
app.use("/api/auth",userRoutes)
app.use("/api/cart",cartRoutes)

app.use("/", (req, res, next) => {
  console.log("Request URL:", req.url, "method: ", req.method);
  next();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
