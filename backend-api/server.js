const express = require("express");
const app = express();
const PORT = process.env.PORT;

const movieRouter = require("./routes/movies");

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server is listening http://127.0.0.1:${PORT}`);
});

app.use("/api/movies", movieRouter);
