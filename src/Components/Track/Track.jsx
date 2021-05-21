import './Track.css'

const Track = ({ track, onAdd, onRemove, isRemoval }) => {
    const renderAction = (isRemoval) => {
        isRemoval? <button onClick={removeTrack}>-</button>:<button className="Track-action" onClick={addTrack}>+</button>
    }

    const addTrack = () => {
        onAdd(track)
    }

    const removeTrack = () => {
        onRemove(track)
    }

    return (
        <div className="Track">
            <div key={track.id} className="Track-information">
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
            </div>
            {renderAction()}
        </div>
    )
}

export default Track