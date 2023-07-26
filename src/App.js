import React, {useState,useEffect} from "react";
import Search from "./components/Search";
import axios from 'axios';
import Results from "./components/Results";
import Popup from "./components/Popup";

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  })

//   const url =
//     "https://api.themoviedb.org/3/movie/popular?api_key=ba116636d2077b0e933590d1a5e4f6ce&language=en-US&page=1";
// useEffect(() => {
//     fetchPopular();
//   },[]);
// const fetchPopular = async () => {
//     const data = await fetch(url);
//     const movies = await data.json();
//     console.log(movies);
//   };

  const apiURL = "http://www.omdbapi.com/?apikey=7b0f71e";
  // const apiURL = "https://api.themoviedb.org/3/authentication";

  const search = (e) => {
    if(e.key === 'Enter' && state.s.trim() !== ''){
      axios(apiURL + "&s=" + state.s).then(({data}) => {
        let results = data.Search;
        console.log(results)
        setState(prevState => {
          return {...prevState, results: results}
        })
      });
    }
  }
  
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return {...prevState, s:s} //getting the prev state and then changing the s value to the new s value
    })
    // console.log(state.s);
  }

  const openPopup = id => {
    axios(apiURL + "&i=" + id).then(({ data }) => {
      let result = data;
      
      setState(prevState => {
        return{ ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return{ ...prevState, selected: {} }
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> Movie Database</h1>
      </header>
      <main>
      {/* searchbar component */}
      <Search handleInput={handleInput}  search = {search}></Search>

      {/* results component */}
      <Results results={state.results} openPopup = {openPopup}/>

      {/* popup for the details component, if the title is not undefined the popup will show */}
      {(typeof state.selected.Title != 'undefined') ? <Popup selected={state.selected} closePopup={closePopup}/> :false} 

      </main>
    </div>
  );
}

export default App;
