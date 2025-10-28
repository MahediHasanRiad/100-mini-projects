import axios from "axios"

const getPlaylist = async () => {
    const playlistData = await axios.get('https://www.googleapis.com/youtube/v3/playlists')
    console.log(playlistData)
}

export default getPlaylist