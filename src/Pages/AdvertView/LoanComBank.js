import React, { useState, useEffect } from "react";

export default function LoanComBank() {
  const [commBankData, setcommBankData] = useState();
  useEffect(() => {
    getCommData();
  });

  async function getCommData() {
    return await fetch("https://cat-fact.herokuapp.com/facts", {
      method: "GET"
    })
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(e => setcommBankData(e.message));
  }

  return (
    <div>
      Loan Information:
      <p>{commBankData}</p>
    </div>
  );
}
