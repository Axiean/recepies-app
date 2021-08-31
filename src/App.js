import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import Bg from "./images/img5.png";

function App() {
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [click, setClick] = useState(false);
  const [showBg, setShowBg] = useState(false);

  const APP_ID = "5d67b3dd";
  const APP_KEY = "af36dfcf99ac873c9364650204170f78";

  useEffect(() => {
    const getData = async () => {
      const Data = await fetch(
        `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const response = await Data.json();
      setRecipe(response.hits);
      console.log(response.hits);
      setSearch("");
      // setShowBg(1);
    };
    getData();
  }, [click]);

  const clickHandler = (e) => {
    e.preventDefault();
    setClick(!click);
    setShowBg(true);
  };

  return (
    <div className="app">
      <form className="search_form" onSubmit={clickHandler}>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Enter food name..."
        />
        <button type="submit">Get it!</button>
      </form>
      <div id="start" style={{ display: showBg ? "none" : "flex" }}>
        <img id="bg" src={Bg} alt="Mehrban" />
        <h1>Lets cook it...!</h1>
      </div>
      <ul>
        {recipe.map((item) => {
          return (
            <Card
              title={item.recipe.label}
              image={item.recipe.image}
              ingredientLines={item.recipe.ingredientLines}
              mealType={item.recipe.mealType}
              cuisineType={item.recipe.cuisineType}
              calories={item.recipe.calories}
              dishType={item.recipe.dishType}
              key={item.recipe.label}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
