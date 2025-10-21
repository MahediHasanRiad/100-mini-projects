import { useEffect, useState } from "react";
import Card from "../utils/card";
import axios from "axios";

function Movis({ getData, allMovis }) {
    
    useEffect(() => {
        getMovis()
    }, [])

    const getMovis = async () => {
        try {
            const res = await axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=dcd260&s=titanic')
            getData(res.data.Search)
        } 
        catch (error) {
            console.log(error.massage)
            console.log(error.response.status)
            console.log(error.response.data)
        }
    }

  return (
    <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr' }}>
      {allMovis.map(movie => (
        <Card
            id={movie.imdbID}
            img={movie.Poster}
            alt={"logo"}
            name={movie.Title}
            type={movie.Type}
            year={movie.Year}
      />
      ))}
    </section>
  );
}
export default Movis;
