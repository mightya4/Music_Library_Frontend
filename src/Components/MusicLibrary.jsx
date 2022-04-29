import React, { useState, useEffect } from "react";
import MusicTable from "./MusicTable";
import AddMusic from './AddMusic';
import axios from "axios";


const MusicLibrary = (props) => {
      
  const [music, setSongEntries] = useState([])

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get("http://127.0.0.1:8000/api/music/")
    setSongEntries(response.data)
  }

    function addNewSong(song){
        let tempMusic = [...music, song]
        
        setSongEntries(tempMusic);
    }
    return(
        <div>
            <div>
                <div>
                    <div>
                        <div>
                            <table>
                                < MusicTable parentSong={music}/>
                            </table>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <AddMusic addNewSongProperty={addNewSong}/>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default MusicLibrary;