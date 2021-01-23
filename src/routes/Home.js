import React from "react";
import axios from "axios";
import Movie from "../components/movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMoives = async () => {
    const {
      data: {
        data: { movies }, //axios가 주는 데이터를 movies변수로 get
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    ); //axios가 로드하는데 느리므로 await를 앞에 붙여줌. 그리고 이 function은 async임 = 시간이 조금 걸리는 func이니 기다려야 함
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMoives();
    // 6초의 timeout을 만들기 ,fetch data 구현 -> 그 이후 'we are ready'가 나오면 render할 수 있게
    // setTimeout(() => {
    //   this.setState({ isLoading : false});
    // }, 6000);
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        <div>
          {isLoading ? (
            <div className="lodaer">
              <span className="loader__text">Loading...</span>
            </div>
          ) : (
            <div className="movies">
              {movies.map((movie) => {
                console.log(movie);
                return (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                  />
                );
              })}
            </div>
          )}{" "}
        </div>
      </section>
    );
  }
}

export default Home;
