import React from "react";
import PropTypes from "prop-types";
//props
// function Food({name, picture, rating}){

//   return <div>
//     <h2> I like {name} </h2>
//     <h4> I got {rating}/6.0</h4>
//   </div>
// }
//component = html을 리턴하는 function

//descsription of props that i want to get
// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   rating: PropTypes.number // number or undefined 만 허용
// }

// const foodILike = [
//   {
//     id:1,
//     name: "kimchi",
//     rating: 4.1

//   },
//   {
//     id: 2,
//     name: "kimbap",
//     rating: 2
//   },
//   {
//     id:3,
//     name: "sushi",
//     rating: 5.6
//   },
//   {
//     id:4,
//     name: "pissa",
//     rating: 4.3
//   },
// ]

// function renderFood(dish){
//   // console.log(dish);
//   return <Food name = {dish.name} />
// }

// function App() {
//   return (
//     <div>
//       {/* {foodILike.map(renderFood)} */}
//       {foodILike.map(dish => (
//         <Food
//         key={dish.id}
//         name={dish.name}
//         rating={dish.rating} />
//       ))}
//     </div>
//   );
// }

//App: React Component
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }
  state = {
    count: 0,
  };
  add = () => {
    this.setState((current) => ({ count: current.count + 1 })); // 내부적으로 current라는 state를 갖고와서 거기서 연산 -> 성능적으로 외부의 stat.countr가져오는 것 보다 더 좋음
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    console.log("component rendered");
  }
  componentDidUpdate() {
    console.log("I just updated");
  }
  componentWillUnmount() {
    console.log("good bye cruel world");
  }
  render() {
    console.log("i am rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
//react는 자동적으로 class component의 render 메소드를 자동으로 실행함
//class component는 state(have datat that will change)를 가지고 있음!!!
// 용도: 바꾸고 싶은 데이터를 state에 넣는 것!

// export default App;
