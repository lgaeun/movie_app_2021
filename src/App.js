import React from 'react';
import PropTypes from "prop-types";
 //props
function Food({name, picture, rating}){
  
  return <div>
    <h2> I like {name} </h2>
    <h4> I got {rating}/6.0</h4>
  </div>
}
//component = html을 리턴하는 function

//descsription of props that i want to get
Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number // number or undefined 만 허용 
}

const foodILike = [
  {
    id:1,
    name: "kimchi",
    rating: 4.1

  },
  {
    id: 2,
    name: "kimbap",
    rating: 2
  },
  {
    id:3,
    name: "sushi",
    rating: 5.6
  },
  {
    id:4,
    name: "pissa",
    rating: 4.3
  },
]

function renderFood(dish){
  // console.log(dish);
  return <Food name = {dish.name} />
}

function App() {
  return (
    <div>
      {/* {foodILike.map(renderFood)} */}
      {foodILike.map(dish => (
        <Food 
        key={dish.id} 
        name={dish.name} 
        rating={dish.rating} />
      ))}
    </div>
  );
}


export default App;
