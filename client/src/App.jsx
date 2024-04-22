import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './views/Home'
import RecipeDetails from './views/RecipeDetails'
import './App.css'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path ="/" element = {<Home/>}/>
        <Route path ="/recipes/:id/details" element = {<RecipeDetails/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}




export default App
