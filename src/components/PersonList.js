import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    time: [],
  };

  componentDidMount() {
    axios.get("/api/time").then((res) => {
      const time = res.data;
      this.setState({ time });
    });
  }

  render() {
    return (
      <ul>
        {this.state.time.map((time) => (
          <li>{time}</li>
        ))}
      </ul>
    );
  }
}
