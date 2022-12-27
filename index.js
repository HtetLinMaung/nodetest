const express = require("express");

const PORT = 3000;

const app = express();

app.get("/nodetest", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
