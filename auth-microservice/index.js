import { app } from "./src/app";

const PORT = process.env.PORT || 3001

app.listen(PORT, () =>
  console.log("listening on port http://localhost:3001"),
  console.log(PORT)
);
