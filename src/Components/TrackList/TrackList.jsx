import Track from '../Track/Track'
import './TrackList.css'

const TrackList = ({ playlist, onAdd, onRemove, isRemoval }) => {
    return (
        <div className="TrackList">
            {playlist && playlist.map(track => {
                <Track track={track} onAdd={onAdd} onRemove={onRemove} isRemoval={isRemoval}/>
            })}
        </div>
    )
}

export default TrackList