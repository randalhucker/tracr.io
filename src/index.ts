import { PrismaClient } from "@prisma/client";
import express from "express";

import userRoutes from "./routes/userRoutes";

export const prisma = new PrismaClient();
const port = 5431;
const app = express();

app.use(express.json());

app.use("/users", userRoutes);

app.listen(port, () =>
  console.log(`REST API server ready at: http://localhost:${port}`)
);
