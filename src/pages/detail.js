import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const {idMeal} = useParams();
    const[detailMeal, setDetailMeal] = useState([]);

    const fetchData = async(idMeal) => {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
        const result = await data.json();
        setDetailMeal(result.meals);
    }
  
    useEffect(()=>{
        fetchData(idMeal);
    }, [idMeal])

    return (
    <div>
        {console.log(detailMeal)}
        <h3>Halaman Detail</h3>
        {
        detailMeal && detailMeal.length > 0 ? (
          <div style={{justifyContent:'center'}}>
            {
              detailMeal.map(details => (
                  <div key={details.idMeal}>
                      <h4>{details.strMeal}</h4>
                      <img src={details.strMealThumb} style={{width: '500px', height: '500px'}} alt={details.strMeal}/>
                  </div>
              ))
            }
          </div>
        ) : (
          <h1>Loading</h1>
        )
      }
    </div>
    )
}

export default Detail