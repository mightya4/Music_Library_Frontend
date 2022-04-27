
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
                    {props.parentMusicEntries.map((music, index) => {
                        return(<tr key={index}>
                            <td>{index + 1}</td>
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
  
  export default MusicTable;