import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Category = () => {
    const[meals, setMeals] = useState([]);
    const[category, setCategory] = useState('Seafood');

    const handleSelect = (category) =>{
      setCategory(category);
    }

    const fetchData = async(category) => {
      const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      const result = await data.json();
      setMeals(result.meals);
    }

    useEffect(()=>{
      fetchData(category);
    }, [category])

  return (
    <>
      <h1>Category</h1>
      <button onClick={()=>handleSelect('Beef')}>
        Beef
      </button>

      <button onClick={()=>handleSelect('Seafood')}>
        Seafood
      </button>

      {
        meals && meals.length > 0 ? (
          <div style={{display: 'flex', flexWrap:'wrap'}}>
            {
              meals.map(meal => (
                <Link style={{margin: '16px'}} to={`/detail/${meal.idMeal}`} key={meal.idMeal}>
                  <p>{meal.strMeal}</p>
                  <img style={{width: '100px', height: '100px'}} src={meal.strMealThumb} alt={meal.strMeal} />
                </Link>
              ))
            }
          </div>
        ) : (
          <h1>Loading</h1>
        )
      }
    </>
  )
}

export default Category