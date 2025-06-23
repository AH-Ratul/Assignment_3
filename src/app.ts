import express, { Application, Response } from "express";
import { appRoutes } from "./app/routes";

const app: Application = express();

app.use(express.json());

app.use("/api", appRoutes);

app.get("/", (_, res: Response) => {
  res.send("My Library app running...");
});

export default app;
