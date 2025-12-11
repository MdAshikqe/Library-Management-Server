import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import cookieParser from "cookie-parser";
import notFound from "./app/middlewares/notFound";
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Libaray management system running",
  });
});

app.use("/api", router);
app.use(notFound);

export default app;
