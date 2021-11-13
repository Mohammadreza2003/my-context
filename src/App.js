import React, { useState } from "react";
import ComponentA from "./ComponentA";
export const UserContext = React.createContext()
export const SalaryContext = React.createContext()
function App() {
  const [salary, setSalary] = useState(5000);

  return (
    <div className="App">
      <UserContext.Provider value="Mohammadreza">
        <SalaryContext.Provider value={{income:salary,setIncome:setSalary}}>
          <ComponentA />
        </SalaryContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
