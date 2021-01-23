import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const { location, history } = this.props;
    if (location.state === undefined) {
      //redirect = take usr back home
      history.push("/");
    }
  } // 즉, moive detail로 갈 수 있는 방법은 home에서 moive를 클릭하는 것 뿐임
  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title} </span>;
    } else {
      return null;
    }
  }
} //이 페이지는 state가 없기때문에 class로
export default Detail;
