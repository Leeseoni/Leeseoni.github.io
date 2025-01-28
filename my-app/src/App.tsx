import { useState } from "react";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [name] = useState(["구라댕씨를", "몰아내자", "타도구라댕"]);

  return (
    <div className="wrapper">
      <Header />
      {name.map(function (item) {
        return <div className="box">{item}</div>;
      })}
    </div>
  );
}

export default App;
