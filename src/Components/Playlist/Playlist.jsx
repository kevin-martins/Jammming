import TrackList from '../TrackList/TrackList'
import './Playlist.css'

const Playlist = ({ playlist, onRemove, onNameChange, onSave }) => {
    let isRemoval = true

    const handleNameChange = (e) => {
        onNameChange(e.target.value)
    }

    return (
        <div className="Playlist">
            <input defaultValue={'New Playlist'} onChange={handleNameChange}/>
            <TrackList playlist={playlist} onRemove={onRemove} isRemoval={isRemoval}/>
            <button className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist