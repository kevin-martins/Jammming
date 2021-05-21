import TrackList from '../TrackList/TrackList'
import './SearchResults.css'


const SearchResults = ({ search, onAdd }) => {
    let isRemoval = false

    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList tracks={search} onAdd={onAdd} isRemoval={isRemoval}/>
        </div>
    )
}

export default SearchResults