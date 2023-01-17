/**
 * npm i mongodb
 * import{ client as MongoClient } from "../config/mongodb.mjs"
 */
import 'dotenv/config'
import { MongoClient } from "mongodb";

const URI = process.env.MONGO_DB_URI;

const client = new MongoClient(URI);

export { client };
