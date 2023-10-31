const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 3306;

app.listen(PORT, () => console.log(`Server runing or port ${PORT}`));