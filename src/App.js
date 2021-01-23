import React,{ useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

const App =() =>{

  const APP_ID = '1db996b5';
  const APP_KEY = 'e813a763a3a98a859f36fcb2ebed574b';

  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  
  useEffect(()=>{
    getRecipes();
  },[query]);
  
  const getRecipes = async () => {
    const reponse = await fetch(exampleReq);
    const data = await reponse.json();
    setRecipes(data.hits);
  };
  
  const updateSearch = (e) =>{
    setSearch(e.target.value);
    // console.log(search);
  };
  
  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };
  const exampleReq= `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe =>(
          <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calory={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
