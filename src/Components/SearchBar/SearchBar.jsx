import './SearchBar.css'

const SearchBar = ({ onSearch }) => {

    const handleTermChange = (e) => {
        onSearch(e.target.value)
    }

    return (
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" />
            <button className="SearchButton" onChange={handleTermChange}>SEARCH</button>
        </div>
    )
}

export default SearchBar