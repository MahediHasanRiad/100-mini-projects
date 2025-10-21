import { useState } from "react";
import { Wrapper } from "./Component/Style/wrapper";
import Movis from "./Component/UI/movis";
import Nav from "./Component/UI/nav";

function App() {
  const [allMovis, setAllMovis] = useState([]);
  const [value, setValue] = useState({ search: "", year: "" });

  /** collect all data from Movis */
  const getData = (data) => {
    setAllMovis(data);
  };

  /** nav input handler */
  const inputHandler = (e) => {
    setValue({ [e.target.name]: e.target.value });
  };

  /** search */
  let searchMovies = allMovis
  if(value.search){
    searchMovies = allMovis.filter(movie => movie.Title.toLowerCase().includes(value.search.toLowerCase()))
  }else{
    searchMovies = allMovis
  }

  /** filter by Year */
  if(value.year){
    searchMovies = allMovis.filter(movie => movie.Year === value.year)
  }else{
    searchMovies = allMovis
  }

  return (
    <Wrapper>
      <Nav value={value} inputHandler={inputHandler} />
      <Movis getData={getData} allMovis={searchMovies} />
    </Wrapper>
  );
}

export default App;
