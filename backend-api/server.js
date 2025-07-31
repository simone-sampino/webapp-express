const express = require("express");
const app = express();
const PORT = process.env.PORT;

const movieRouter = require("./routes/movies");
const connection = require("./database/connection");

app.use("/api/movies", movieRouter);

app.listen(PORT, () => {
  console.log(`Server is listening http://127.0.0.1:${PORT}`);
});
