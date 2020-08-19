import React, { Component } from 'react';
import CardList from '../components/Cardlist.js';
import { connect } from 'react-redux';
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js';
import { setSearchField, requestRobots } from '../actions.js';

const mapStateToProps = (state) => {
    return({
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    })
}

class App extends Component {

    componentDidMount() {
        this.props.onRequestRobots()
    }

    // onSearchChange = (event) => {
    //     this.setState(
    //         {
    //             searchfield: event.target.value
    //         }
    //     )
    // }

    render() {
        const filteredRobots = this.props.robots.filter(robot => {
            return (robot.name.toLocaleLowerCase().includes(this.props.searchField.toLowerCase()))
        });
        return(
            this.props.isPending ?
            <h1>Loading</h1> :
            <div className='tc'>
            <h1 className='f1'>Robofriends</h1>
            <Searchbox searchChange={this.props.onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundary>
            </Scroll>
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
