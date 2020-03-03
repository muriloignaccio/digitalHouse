const express = require("express");
const app = express();
const PetsRoutes = require("./routes/PetsRoutes");

app.use("/pets", PetsRoutes);
app.listen(3000, () => console.log("Servidor online"));