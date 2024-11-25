import express, { Express, Request, Response } from "express";
import { onRequest } from "firebase-functions/https";
import dotenv from "dotenv";
import { errorHandler } from "@middlewares/errorHandler";
import userRoutes from "@routes/userRoutes";
import authRoutes from "@routes/authRoutes";

dotenv.config();

const app: Express = express();
const port = process.env.SERVER_PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

// Routes
app.use("/users", userRoutes);
app.use("/auth", authRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

exports.app = onRequest(app);
