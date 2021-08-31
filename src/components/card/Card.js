import React from "react";
import "./Card.css";
import Swal from "sweetalert2";
import Gh from "../../images/img4.png";
function Card({
  title,
  image,
  recipe,
  ingredientLines,
  mealType,
  cuisineType,
  calories,
  dishType,
}) {
  const integ = ingredientLines.join("<br />");
  const clickHandler = async (e) => {
    e.preventDefault();
    await Swal.fire({
      title: title,
      html: integ,
      width: 600,
      padding: "3em",
      background: "#fff url(/images/trees.png)",
      backdrop: `
      rgba(0,0,123,0.4)
      url(${Gh})
      left top
      no-repeat
    `,
    });
  };

  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card_info">
        <h3 className="mealtype">{mealType}</h3>
        <h4 className="dishtype">{dishType}</h4>
        <h2>{cuisineType}</h2>
        <h1 className="title">{title}</h1>

        {/* <ul>
          {ingredientLines.map((item) => {
            return <li>{item}</li>;
          })}
        </ul> */}

        <h4 className="calories">Calories : {Math.floor(calories)}kcal </h4>
        <button
          onClick={clickHandler}
          type="submit"
          value={title}
          data={ingredientLines}
        >
          Ingredients
        </button>
      </div>
    </div>
  );
}

export default Card;
