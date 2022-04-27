import React, { useState } from "react";
import DisplayMusic from "./DisplayMusic";
import SearchBar from "./SearchBar";

const [music, setMusicEntries] = useState([])

function App() {
  return (
    <div>
      <SearchBar/>
      <DisplayMusic/>
    </div>
  );
}

export default App;
