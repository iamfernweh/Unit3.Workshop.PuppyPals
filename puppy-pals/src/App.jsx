import { useState } from "react";
import './App.css';
import { puppyList } from "./data.js";

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  console.log(puppies);
  
  return (
    <div>
      {/* You can place any content you want to keep within this div */}
    </div>
  );
}

export default App;
