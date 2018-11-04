
import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SerchBox from '../components/SerchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import { setSearchField } from '../actions';

const mapStateToProps = state =>{
  // tell me what state I should listen to
  return {
    searchField: state.searchField,
  }
}

const mapDispatchToProps = (dispatch) =>{
  // tell me what props I should listen to and what actions I should dispatch
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      // searchfield: ''
    }
  }

  // onSearchChange = (event) => {
  //   this.setState({searchfield: event.target.value}) ;
  // }

  componentDidMount(){
    // part of react mounting

    // console.log(this.props.store);

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
      .then(users => this.setState({robots: users}));
    
  }
  render(){
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobot = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
      }
    )
    if (robots.length === 0) {
      return <h1>Loading</h1>
      // in case the fetch process takes too long time
    }else{
      return(
        // need to return a single parent, such as a div
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SerchBox searchChange = {onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobot} />
          </ErrorBoundry>  
        </Scroll>
      </div>
    );
    }
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);