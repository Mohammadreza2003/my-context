import React from "react";
import { UserContext, SalaryContext } from "./App";
function ComponentC() {

  return (
    <>
      <UserContext.Consumer>
        {
          user => {
            return (
              <SalaryContext.Consumer>
                {
                salary => {
                    return (
                      <h3>Name: {user} , Salary: {salary.income} $</h3>
                    )
                  }
                }
              </SalaryContext.Consumer>
            )
          }
        }
      </UserContext.Consumer>
    </>
  );
}

export default ComponentC;