import React from 'react';
import './App.css';
import axios from 'axios'
import Followers from './Followers'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      user:{},
      followers:[]
    }
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/epcornwall')
    .then((res)=>{
      console.log(res)
      this.setState({
        user: res.data
      });
    })
    .catch((err)=>{
      console.log(err)
    });

    axios.get('https://api.github.com/users/EPCornwall/followers')
    .then((res)=>{
      console.log(res)
      this.setState({
        followers: res.data
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  
 render() {return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="userCard">
      <h3>{this.state.user.name}</h3>
      <img src={this.state.user.avatar_url}></img>
      <p>Followers: {this.state.user.followers}</p>
      <p>Following: {this.state.user.following}</p>
      </div>
      <Followers followers={this.state.followers} />
    </div>
);}
}

export default App;
