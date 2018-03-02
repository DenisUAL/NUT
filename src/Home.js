import React, {Component} from 'react';
import axios from 'axios';
import ACCESSTOKEN from './secret';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios
      .get("https://api.instagram.com/v1/users/self/?access_token=" + ACCESSTOKEN)
      .then((result)=>{
        console.log(result);
      }).catch((err)=>{
        console.log(err);
      })
  }

  render() {
    return (
      <div className="Home"></div>
    );
  }
}

export default Home;
