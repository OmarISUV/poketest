import dotenv from "dotenv";
import express from "express";
import { route as CrudRoute } from "./routes/crud.mjs";

const service = express();

service.use(express.json());
service.use(express.urlencoded({ extended: true }));

service.use(CrudRoute);

export { service };
