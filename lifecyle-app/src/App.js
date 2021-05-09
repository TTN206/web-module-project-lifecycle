import React from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './Components/UserCard';

class App extends React.Component {

  state = {
    users: [],
    followers: [],
  }

  componentDidMount() {
    axios // Fetch the User Data
      .get('https://api.github.com/users/ttn206')
      .then((res)=>{ // Display the User Data
        console.log(res)
        this.setState({
          users: res.data,
        })
      })
      .catch(err => console.error('unable to get user info', err))

    axios // Fetch the User's Followers
      .get('https://api.github.com/users/ttn206/followers') 
      .then((res)=>{
        console.log(res)
        this.setState({
          followers: res.data,
        })
      })
      .catch(err => console.error('unable to get users followers', err))
  }


  render(){
    return (
      <div>
        <h1>SHOW ME THE MONEY!</h1>
        <UserCard />
      </div>
      )
  }

}

export default App;
