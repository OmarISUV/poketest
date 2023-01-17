import serverlessExpress from "@vendia/serverless-express";
import { service } from "./src/service.mjs";

const handler = serverlessExpress({ app: service });

export { handler };
