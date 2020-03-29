import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from "./Recipe";


const App = () => {
  const APP_ID = "944cbc47"
  const APP_KEY = "231494c524e206ba29e4143748200dfa"

   const [recipes,setRecipies] = useState([]);
    const [search,setSearch] = useState('');
    const [query,setQuery] = useState('')


  useEffect(() =>{
        getRecipies();
  },[query])

  const getRecipies = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipies(data.hits);
  }
    const updateSearch = e => {
      setSearch(e.target.value)
    }
    const getSearch = e => {
         e.preventDefault();
         setQuery(search);
         setSearch('')
    }
   return(
       <div className="App">
         <form onSubmit={getSearch} className="search-form">
           <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Ready for magic"/>
           <button className="search-button" type="submit">Search</button>
         </form>
           <div className='recipies'>
           {recipes.map(recipe => (
               <Recipe
                   id = {recipe}
                   title = {recipe.recipe.label}
                   calories = {recipe.recipe.calories}
                   img = {recipe.recipe.image}
                   test = {recipe.recipe.ingredients}
               />
           ))}
           </div>
       </div>
   )
}

export default App;
