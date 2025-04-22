import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout.jsx"
import HomePage from "./pages/HomePage.jsx"
import SingleMovie from "./pages/SingleMovie.jsx"
import GlobalContext from "./context/GlobalContext.jsx"
import { useState } from "react"


function App() {

  const [isLoading, setIsLoading] = useState(true)


  return (
    <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>

            <Route path="/" Component={HomePage} />
            <Route path="/movies/:id" Component={SingleMovie} />

          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App
