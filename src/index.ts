import express from "express";
import api from "./api";
const app = express();

// add middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// add routes
app.use("/api", api);
// start express server
app.listen(3000, () => {
  console.log("server started on port 3000");
});
