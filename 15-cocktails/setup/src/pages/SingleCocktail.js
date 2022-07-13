import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCallback } from "react";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  const fetchCocktail = useCallback(async () => {
    try {
      setLoading(true);
      const respons = await fetch(`${url}${id}`);
      const data = await respons.json();

      if (data.drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1: item1,
          strIngredient2: item2,
          strIngredient3: item3,
          strIngredient4: item4,
          strIngredient5: item5,
        } = data.drinks[0];
        const ingredients = [item1, item3, item2, item4, item5]
          .filter((n) => n)
          .join(",/")
          .concat(".")
          .split("/");
        const newCocktail = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        };
        setCocktail(newCocktail);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchCocktail();
  }, [id, fetchCocktail]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  }

  const { name, image, info, category, glass, instructions, ingredients } =
    cocktail;

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info :</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {glass ? glass : "any"}
          </p>
          <p>
            <span className="drink-data">instructions :</span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {ingredients.map((ing, index) => {
              return <span key={index}>{ing}</span>;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
