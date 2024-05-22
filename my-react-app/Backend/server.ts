import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app: Express = express();
app.use(cors());
app.use(express.json());
const port = 5080;

const uri = 'mongodb+srv://moyadd373:todoList123@cluster0.mongodb.net/todoList?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 5000 })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.log("*******\nDie Verbindung zum Database ist nicht korrekt\n*******");
    console.error('Error connecting to MongoDB Atlas', error);
  });

  const taskSchema = new mongoose.Schema({
      text: String,
    completed: Boolean,
    date: Date,
  });
  

const Task = mongoose.model('Task', taskSchema);

app.get('/tasks', async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find({});
    res.json(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/tasks', async (req: Request, res: Response) => {
  const { task, completed, date } = req.body;
  if (!task || !task.text) {
    return res.status(400).send({ error: 'Task object is required with title and text' });
  }
  try {
    const newTask = new Task({ task, completed, date });
    await newTask.save();
    res.json(newTask);
  } catch (error) {
    res.status(500).send(error);
  }
});



app.delete('/tasks/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await Task.findByIdAndDelete(id);
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put('/tasks/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { task, completed, date } = req.body;
  if (!task ||  !task.text) {
    return res.status(400).send({ error: 'Task object is required with text' });
  }
  try {
    const updatedTask = await Task.findByIdAndUpdate(id, { task, completed, date }, { new: true });
    res.json(updatedTask);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
