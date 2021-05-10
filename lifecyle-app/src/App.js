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
  }

  render(){
    return (
      <div>
        <h1>This is the User Card Info</h1>
        <UserCard users={this.state.users}/>
      </div>
      )
  }

}

export default App;
