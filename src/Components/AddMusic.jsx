import React, { useState } from "react";
const AddMusic = (props) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release_date, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');
    const resetSongEntry = () => {
        setTitle('')
        setArtist('')
        setAlbum('')
        setReleaseDate('')
        setGenre('')
    }

    function handleCreateSong(event){
        event.preventDefault();
        let songEntry = {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre,
        };
        props.addNewSongProperty(songEntry);
        resetSongEntry();
    }
    return(
        <form onSubmit={handleCreateSong} className='form-grid'>
            <span className="form-group">
                <label>Title</label>
                <input type='text' className="form-control" value= {title} onChange={(event) => {setTitle(event.target.value)}}></input>
            </span>
            <span className="form-group">
                <label>Artist</label>
                <input type='text' className="form-control" value= {artist} onChange={(event) => {setArtist(event.target.value)}}></input>
            </span>
            <span className="form-group">
                <label>Album</label>
                <input type='text' className="form-control" value= {album} onChange={(event) => {setAlbum(event.target.value)}}></input>
            </span>
            <span className="form-group">
                <label>Release Date</label>
                <input type='text' className="form-control" value= {release_date} onChange={(event) => {setReleaseDate(event.target.value)}}></input>
            </span>
            <span className="form-group">
                <label>Title</label>
                <input type='text' className="form-control" value= {genre} onChange={(event) => {setGenre(event.target.value)}}></input>
                <button type='submit'>Create</button>
            </span>
        </form>
    );
}

export default AddMusic;