import React, {Component} from 'react';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios
      .get()
      .then()
  }

  render() {
    return (
      <div className="Home"></div>
    );
  }
}

export default Home;
