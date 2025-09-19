import express from "express";

const app = express();

const forNina = [
  {
    id: 1,
    name: "Auto-Clicker",
    cost: 100,
    increase: 1,
  },
];
app.get("/nina", (req, res) => {
  res.json(forNina);
});

app.listen("8080", () => {
  console.log("runngin");
});
