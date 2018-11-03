
import React from 'react';
import CardList from '../components/CardList';
import SerchBox from '../components/SerchBox';
import './App.css';
import Scroll from '../components/Scroll';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value}) ;
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
      .then(users => this.setState({robots: users}));
    
  }
  render(){
    const filteredRobot = this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      }
    )
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>
    }else{
      return(
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SerchBox searchChange = {this.onSearchChange}/>
        <Scroll>
          <CardList robots={filteredRobot} />
        </Scroll>
      </div>
    );
    }
    
  }
}

export default App;