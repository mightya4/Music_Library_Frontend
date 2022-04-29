import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import MusicTable from "./Components/MusicTable";
import NavigationBar from "./Components/NavigationBar";
import SearchBar from "./Components/SearchBar";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


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
      <SearchBar/> 
      <NavigationBar/>
      <Container><MusicTable parentSongEntries = {song}/></Container>

    </div>
  );
}

export default App;
