import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  db_url: process.env.MONGO_URI,
  NODE_ENV: process.env.NODE_ENV
};
