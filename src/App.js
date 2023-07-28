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

//omdb api
  // const apiURL = "http://www.omdbapi.com/?apikey=7b0f71e";
  const baseURL = "https://api.themoviedb.org/3/";
  const apiKey = "api_key=ba116636d2077b0e933590d1a5e4f6ce";

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTExNjYzNmQyMDc3YjBlOTMzNTkwZDFhNWU0ZjZjZSIsInN1YiI6IjY0YzExYzBmMWNmZTNhMGViMWNiZWJiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4kAM5QSNSHJQ1sGH9gYg0D0Ee2L6GA8Obw0D6XHXvoI'
    }
  };

  function getMovies(query) {
    fetch(baseURL + "search/movie?query=" + query + '&'+ apiKey, options)
      .then(response => response.json())
      .then(response => {
        setState(prevState => ({
          ...prevState,
          results: response.results// Assuming the movie data is returned as an object with a 'Search' property
        }));
        console.log(response.results);
      })
      .catch(err => console.error(err));
  }


  const search = (e) => {
    if (e.key === 'Enter' && state.s.trim() !== '') {
      getMovies(state.s); // Pass the search query as a parameter to getMovies
    }
  }
  
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return {...prevState, s:s} //getting the prev state and then changing the s value to the new s value
    })
    // console.log(state.s);
  }

  function openPopup(id) {
  
    fetch(baseURL + "movie/" + id +'?' + apiKey)
      .then(response => response.json())
      .then(data => {
        let result = data;
      
        setState(prevState => {
          return{ ...prevState, selected: result }
        });
      })
      .catch(err => console.error(err));
  }
  

  const closePopup = () => {
    setState(prevState => {
      return{ ...prevState, selected: {} }
    });
  }
  const handleSearch = () => {
    if (state.s.trim() !== "") {
      getMovies(state.s);
    } else {
      // If the search bar is empty, you can show an error message or perform any other action as needed
      console.log("Search term is empty!");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> Movie Database</h1>
      </header>
      <main>
      {/* searchbar component */}
      <Search handleInput={handleInput}  search = {search}></Search>

      {/* results component */}
      <Results results={state.results} openPopup = {openPopup} handleSearch={handleSearch}/>

      {/* popup for the details component, if the title is not undefined the popup will show */}
      {(typeof state.selected.original_title != 'undefined') ? <Popup selected={state.selected} closePopup={closePopup}/> :false} 

      </main>
    </div>
  );
}

export default App;
