import express, { Application, Response } from "express";
import { appRoutes } from "./app/routes";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import { notFound } from "./app/middlewares/notFound";

const app: Application = express();

app.use(express.json());

app.use("/api", appRoutes);

app.get("/", (_, res: Response) => {
  res.send("My Library app running...");
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;
