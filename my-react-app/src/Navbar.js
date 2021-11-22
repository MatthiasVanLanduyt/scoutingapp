import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar">
				<div className="navbar-left">
					<span className="navbar-item">Home</span>
					<span className="navbar-item">Team</span>
					<span className="navbar-item">Game</span>
					<span className="navbar-item">Competition</span>
				</div>
				<div className="navbar-right">
					<span className="navbar-item">Sign In</span>
					<span className="navbar-item">Register</span>
				</div>
			</nav>
		);
	};
}

export default Navbar;