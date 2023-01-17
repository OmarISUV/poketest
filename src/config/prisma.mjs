/**
 * npm i prisma @prisma/client
 * import{ client as PrismaClient } from "../config/prisma.mjs"
 */
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export { client };
