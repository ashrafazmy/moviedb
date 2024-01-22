import React from 'react'
function Search({handleInput, search,handleSearch}) {
  console.log(search,'search')
  return (
    <section class="searchBox-wrap">
        <div className="search-container">
        <input
          type='text'
          placeholder='Search for a movie.'
          className='searchBox'
          onChange={handleInput}
          onKeyDown={search}
        />
        
        {/* <button className='enter-btn' onClick={handleSearch} >Enter</button> */}
      </div>
    </section>
    
  )
}

export default Search