require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());

const routes = require("./api.routes");
app.use("/api/v1", routes);

app.get("/", (req, res) => {
  res.send("¡Hola JB!");
});

app.listen(process.env.PORT, async () => {
  console.log("SERVIDOR CONECTADO...");
});
