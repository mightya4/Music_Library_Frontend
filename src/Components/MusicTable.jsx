
const MusicTable = (props) => {
    return (
      <div>
          <table className='table'>
                <tbody>
                        <tr>
                            <th>Title</th>
                            <th>Artist</th>
                            <th>Album</th>
                            <th>Release Date</th>
                            <th>Genre</th>
                            <th>Likes</th>
                            <th>Dislikes</th>
                        </tr>
                    {props.parentSongEntries.map((song, index) => {
                        return(<tr key={index}>
                            <td>{index + 1}</td>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                            <td>{song.likes}</td>
                            <td>{song.dislikes}</td>
                        </tr>
                        );
                    })}
                </tbody>
          </table>
      </div>
    );
  }
  
  export default MusicTable;