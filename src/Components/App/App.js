import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import Spotify from '../../util/Spotify'
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState('Britney')
  const [playlistTracks, setPlaylistTracks] = useState([{
    name: 'Stronger',
    artist: 'Britney',
    album: 'Oops!... I Did It Again',
    id: ''
  }])

  const addTrack = (track) => {
    if (playlistTracks.find(savedTrack => savedTrack.id !== track.id)) {
      playlistTracks.push(track)
    }
  }

  const removeTrack = (track) => {
    playlistTracks.filter(elem => elem.id != track.id)
  }

  const updatePlaylistName = (name) => {
    setSearchResults(name)
  }

  const savePlaylist = () => {
    const trackURIs = []
  }

  const search = (term) => {
    console.log(term)
    Spotify.search(term)
  }

  return (
    <div>
      <h1>Ja<span class="highlight">mmm</span>ing</h1>
      <div class="App">
          <SearchBar onSearch={search}/>
          <div class="App-playlist">
          <SearchResults search={searchResults} onAdd={addTrack}/>
          <Playlist playlist={playlistTracks} onRemove={removeTrack} onNameChange={updatePlaylistName} onSave={savePlaylist}/>
          </div>
      </div>
    </div>
  )
}

export default App;