import Playlist from "../UI/playlist";
import AddPlayListBtn from "../UI/add-playlist-btn";
import axios from "axios";
import { useEffect } from "react";

function AllPlaylist() {

    useEffect(() => {
        getPlaylist()
    }, [])

    // input playlist
    const playlistLink = (e) => {
       console.log(e.target.value)
    }
    // submit button 
    const submitPlaylist = () => {
        console.log('clicked')
    }


    const getPlaylist = async () => {
        try {
            const playlistData = await axios.get('https://www.googleapis.com/youtube/v3/playlists')
            console.log(playlistData)
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <section>
      <AddPlayListBtn playlistLink={playlistLink} submitPlaylist={submitPlaylist}/>
      <Playlist />
    </section>
  );
}

export default AllPlaylist;
