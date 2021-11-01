import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { UserContext, SalaryContext } from "./App";
function ComponentB() {
  const name = useContext(UserContext)
  const salary = useContext(SalaryContext)
  return (
    <>
    <p>name : {name} , salary : {salary} $</p>
      <ComponentC />
    </>
  );
}

export default ComponentB;