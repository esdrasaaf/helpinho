import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { authenticationRouter } from './routes/auth-router';
import { helpRouter } from './routes/help-routers';

dotenv.config();

// Configs
const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send({ok: "OK!"}))
  .use("/auth", authenticationRouter)
  .use("/help", helpRouter)

const port = 4000;
app.listen(port, () => console.log(`Server running in port ${port}`));