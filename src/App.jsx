import React from "react";

import "./App.css";
import MyForm from "./components/MyForm";

function App() {

  return (
    <div>
      <h2>Forms</h2>
      <MyForm user={{name: "Michel", email: "michel.lp@outlook.com"}} />
    </div>
  );
}

export default App;
