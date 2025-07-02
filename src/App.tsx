import Top from "./components/Top"
import Body from "./components/Body"
import { MovieProvider } from "./context/MovieContext"


function App() {


  return (
    <>
    <MovieProvider >
      <Top />
      <Body />
    </MovieProvider>
    </>
  )
}

export default App
