import express from "express";
import cors from "cors"

const app = express();
app.use(cors())

const upgradesForNina = [
  {
    id: 1,
    name: "Auto-Clicker",
    cost: 100,
    increase: 1
  },
  {
    id: 2,
    name: "Enhanced Grill",
    cost: 500,
    increase: 5
  },
  {
    id: 3,
    name: "Takoyaki Farm",
    cost: 1000,
    increase: 10
  },
  {
    id: 4,
    name: "Robot Cook",
    cost: 2000,
    increase: 20
  },
  {
    id: 5,
    name: "Takoyaki Factory",
    cost: 5000,
    increase: 50
  },
  {
    id: 6,
    name: "Magic Flour",
    cost: 10000,
    increase: 100
  },
  {
    id: 7,
    name: "Time Machine",
    cost: 20000,
    increase: 200
  },
  {
    id: 8,
    name: "Quantum Grill",
    cost: 50000,
    increase: 500
  },
  {
    id: 9,
    name: "Alien Technology",
    cost: 100000,
    increase: 1000
  },
  {
    id: 10,
    name: "Interdimensional Cook",
    cost: 200000,
    increase: 2000
  }
];

app.get("/nina", (req, res) => {
  res.json(upgradesForNina);
});

app.listen("8080", () => {
  console.log("runngin");
});
