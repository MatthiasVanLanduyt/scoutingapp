import React, {Component} from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Game from './Game.js';

class App extends Component {
	render () {
		return (
			<div className="App">
				
				<Navbar />
				<Game />
      
			</div>
  		);
	}
	
	
}




export default App;
