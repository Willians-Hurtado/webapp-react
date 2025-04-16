import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout.jsx"
import HomePage from "./pages/HomePage.jsx"
import SingleMovie from "./pages/SingleMovie.jsx"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>

          <Route path="/" Component={HomePage} />
          <Route path="/movies/:id" Component={SingleMovie} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
