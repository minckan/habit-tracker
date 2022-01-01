import React, { Component } from 'react';

class Navbar extends Component {
    
    render() {
        return (
            <header className='navbar'>
                <span><i className="fas fa-leaf navbar-logo"></i></span>
                <span>Habit Tracker</span> 
                <span className="navbar-count">{ this.props.count }</span>
            </header>
        );
    }
}

export default Navbar;