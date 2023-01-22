const express = require("express");
const cors = require("cors");
const codes = require("./api/codes");
const app = express();

app.use(cors());

const PORT = process.env.PORT || 5050;

app.use("/api/codes", codes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
