import Top from "./components/Top"
import Body from "./components/Body"
import Search from "./components/Search"

import { useState } from "react";


function App() {


  const [moveId, setMovieId] = useState('');

  return (
    <>
      {keyword === "" ? 
      <>
        <Top keyword={keyword} setKeyword={setKeyword}/>
        <Body />
      </>
      : 
        <Search keyword={keyword} setKeyword={setKeyword}/>}
    </>
  )
}

export default App
