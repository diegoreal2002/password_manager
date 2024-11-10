const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use("/users", userRoutes);
app.use(express.static(path.join(__dirname, "../public")));

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
