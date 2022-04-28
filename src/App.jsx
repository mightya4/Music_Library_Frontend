import React, { useState, useEffect } from "react";
import MusicTable from "./Components/MusicTable";
import NavigationBar from "./Components/NavigationBar";
import axios from "axios";


function App() {
  
  const [song, setSongEntries] = useState([])

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get("http://127.0.0.1:8000/api/music/")
    setSongEntries(response.data)
  }

  return (
    <div>
      <NavigationBar/>
      <MusicTable parentSongEntries = {song}/>
    </div>
  );
}

export default App;
