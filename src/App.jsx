import React, { useState } from "react";
import MusicTable from "./Components/MusicTable";
import NavigationBar from "./Components/NavigationBar";
import SearchBar from "./Components/SearchBar";


function App() {
  
  const [music, setMusicEntries] = useState([])

  return (
    <div>
      <NavigationBar/>
      <SearchBar/>
      <MusicTable parentMusicEntries = {music}/>
    </div>
  );
}

export default App;
