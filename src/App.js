import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
// import "./App.css";

function App() {
  return (
    <HashRouter>
      {/* Router 밖에서는 react navigation Link를 쓸 수 없다  */}
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
      {/* /movie/:id 로 해서 movie 아이디마다 different url 줄 수 도 있음 */}
    </HashRouter>
  );
} // 저 url로 가면 about이란 컴포넌트를 보여준다

export default App;
