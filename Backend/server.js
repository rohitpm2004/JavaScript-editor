import dotenv from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/config/db.js";
dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port http://localhost:${PORT}`);
});
