import React, {useState} from "react";
import Search from "./components/Search";

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  })
  const apiURL = "http://www.omdbapi.com/?i=tt3896198&apikey=7b0f71e";

  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return {...prevState, s:s} //getting the prevstate and then changing the s value to the new s value
    })
    console.log(state.s);
    
  }



  return (
    <div className="App">
      <header className="App-header">
        <h1> Movie Database</h1>
      </header>
      <main>
      {/* searchbar component */}
      <Search handleInput={handleInput} ></Search>
      {/* results component */}
      {/* popup for the details component */}
      
      </main>
    </div>
  );
}

export default App;
