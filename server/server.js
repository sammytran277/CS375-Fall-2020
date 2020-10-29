const express = require("express");
const app = express();

const PORT = 3000;
const HOSTNAME = "localhost";

app.listen(PORT, HOSTNAME, () => {
  console.log(`Listening at http://${HOSTNAME}:${PORT}`);
});