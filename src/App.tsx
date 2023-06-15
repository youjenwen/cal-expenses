import { useState } from "react";
import "./App.css";
import ExpensesList from "./components/expensesList";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl my-5">Household Expenses Calculator</h1>
      <div className="w-9/12">
      <ExpensesList />
      </div>
    </div>
  );
}

export default App;
