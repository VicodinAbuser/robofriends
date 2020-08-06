import React, { Component } from 'react';
import CardList from './Cardlist.js';
import robots from './robots.js'
import Searchbox from './Searchbox';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState(
            {
                searchfield: event.target.value
            }
        )
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return (robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLowerCase()))
        });
        return(
            <div className='tc'>
            <h1 className='f1'>Robofriends</h1>
            <Searchbox searchChange={this.onSearchChange}/>
            <CardList robots={filteredRobots}/>
            </div>
        )
    }

}

export default App;
