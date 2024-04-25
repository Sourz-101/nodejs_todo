import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(
      process.env.MONGO_URI,
      {
        dbName: "backend-API",
      }
    )
    .then(() => console.log("Database=(* ￣3)💗(ε￣ *)=Server"))
    .catch((err) => console.log("Error is :", err));
};
