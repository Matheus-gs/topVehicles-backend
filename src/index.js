import express from 'express';
import cors from 'cors';
import VehiclesController from './http/controllers/vehicles.controller.js';

const app = express()
const port = 8000
const controllers = [VehiclesController]

const corsOptions =
{
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}

app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json());
app.use(cors(corsOptions));

controllers.forEach(controller => app.use(controller));

app.listen(port, () => console.log(`API launched on http://localhost:${port} 🚀`))

export default app;