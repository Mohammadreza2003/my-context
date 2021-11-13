import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { UserContext, SalaryContext } from "./App";
function ComponentB() {
  const name = useContext(UserContext)
  const sContext = useContext(SalaryContext)
  
  return (
    <>
      <p>name : {name} , sContext : {sContext.income} $</p>
      <button onClick={()=>{sContext.setIncome(sContext.income + 5000)}}>Add salary</button>
      <ComponentC />
    </>
  );
}

export default ComponentB;