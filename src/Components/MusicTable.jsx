
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
                        </tr>
                    {props.parentSongEntries.map((song, index) => {
                        return(<tr key={index}>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                        </tr>
                        );
                    })}
                </tbody>
          </table>
      </div>
    );
  }
  
  export default MusicTable;