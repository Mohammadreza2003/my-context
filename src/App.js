import React from "react";
import ComponentA from "./ComponentA";
export const UserContext = React.createContext()
export const SalaryContext = React.createContext()
function App() {
  return (
    <div className="App">
      <UserContext.Provider value="Mohammadreza">
        <SalaryContext.Provider value="5000">
          <ComponentA />
        </SalaryContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
