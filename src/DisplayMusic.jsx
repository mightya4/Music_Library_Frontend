import React from 'react';


function DisplayMusic() {
    return (
      <div>
          <table className='table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                        <th>Likes</th>
                        <th>Dislikes</th>
                    </tr>
                </thead>
                <tbody>
                    {props.parentMusicEntries.map((music, index) => {
                        return(<tr key={index}>
                            <td>{music.title}</td>
                            <td>{music.artist}</td>
                            <td>{music.album}</td>
                            <td>{music.release_date}</td>
                            <td>{music.genre}</td>
                            <td>{music.likes}</td>
                            <td>{music.dislikes}</td>
                        </tr>
                        );
                    })}
                </tbody>
          </table>
      </div>
    );
  }
  
  export default DisplayMusic;