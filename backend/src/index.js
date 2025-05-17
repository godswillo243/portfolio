import express from "express";
import compression from "compression";

import NodeCache from "node-cache";
import connectMongodb from "./db/connectMongodb.js";
import router from "./routes/index.routes.js";

const app = express();

const cache = new NodeCache({ stdTTL: 60 }); // cache for 60 seconds

app.use(compression({
  level: 6, // Compression level (0-9)
  threshold: 1024, // Minimum response size to compress
}));

app.use(express.json());

app.use("/api", router)

app.listen(3000, () => {
  connectMongodb();
  console.log("Server is running on port 3000");
});
