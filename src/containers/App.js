import React, { Component } from 'react';
import CardList from '../components/Cardlist.js';
// import robots from './robots.js'
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users").then(response => {
            console.log(response)
            return(response.json());
        }).then(users => {
            console.log(users);
            this.setState({
                robots: users
            })
        })
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
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundary>
            </Scroll>
            </div>
        )
    }

}

export default App;
