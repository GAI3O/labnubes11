import express from "express";
import cors from "cors";
import { productRouter } from "./components";
import connect from "../db"
import path from "path"
export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs');
app.set('views', path.join(__dirname,"views"))
connect("mongodb+srv://gabohc:girasol12OMG@cluster0.tfetb.mongodb.net/lab11nubes?retryWrites=true&w=majority")
app.use("/", productRouter);

