import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const balance = transactions.map((item) => item.amount);
  const total = balance.reduce((acc, item) => (acc += item)).toFixed(2);
  return (
    <>
      <h4>Your Balance </h4>
      <h1 className="balance">${total}</h1>
    </>
  );
};

export default Balance;
