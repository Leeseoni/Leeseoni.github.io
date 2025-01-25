import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState(["구라댕씨를", "몰아내자", "타도구라댕"]);

  return (
    <div>
      {name.map(function (item) {
        return <div className="box">{item}</div>;
      })}
    </div>
  );
}

export default App;
