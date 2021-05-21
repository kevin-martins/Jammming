const Spotify = () => {
    const clientId = '9438833150f34fae96cf0e3840cd9420'
    const uri = "http://localhost:3000/"
    const url = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${uri}`

    const accessToken = '';
    const getAccessToken = () => {
        if (accessToken) {
            return accessToken;
        }
    };

    const search = async (searchTerm) => {
        const res = await fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`)
        const data = await res.json()
        return data.map(track =>
            [
                {
                    id: track.id,
                    name: track.name,
                    artist: track.artist[0].name,
                    album: track.album.name,
                    uri: track.uri
                }
            ])
    }

    // If the access token is not already set, check the URL

    // If the access token and expiration time are in the URL
    accessToken = clientId
    const expirationTime = ''
    setTimeout(() => {
        accessToken = ''
    }, expirationTime * 1000);
}

export default Spotify