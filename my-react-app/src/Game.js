import React, {useState, useEffect} from 'react';
import Scoreboard from './Scoreboard.js';
import Gameboard from './Gameboard.js';
import './Game.css';

function Game() {
	const [teams, setTeams] = useState([{id: '1', name: 'Kortrijk Spurs', score: 0},
										{id: '2', name: 'Roeselare', score: 0}
									]);
	const [quarters, setQuarters] = useState([	{id: '1', name: 'Q1', active: true},
												{id: '2', name: 'Q2', active: false},
												{id: '3', name: 'Q3', active: false},
												{id: '4', name: 'Q4', active: false},
												{id: '5', name: 'OT', active: false}
											]);

	function handleQuarterClick(event, id) {

		const newQuarters = quarters.map( (quarter) => {
		if (quarter.id === id) {
			
			let newQuarter = Object.assign({}, quarter, {active: true});
			return newQuarter;
		
		} 
		if (quarter.active === true && quarter.id !== id) {
			let newQuarter = Object.assign({}, quarter, {active: false});
			return newQuarter;
		}
		return quarter;
		});
		setQuarters( newQuarters);	
	}

	const [players, setPlayers] = useState([
											{id: '4', name: 'Emile', img: 'emile.jpg', active: true, selected: true, 
												stats: {
													pts: 0, reb: 0, ast: 0, blk: 0, stl: 0, to: 0, pf: 0
												}, shots: []
											},
											{id: '5', name: 'Klaas', img: 'klaas.jpg', active: true, selected: false, stats: {
												pts: 0, reb: 0, ast: 0, blk: 0, stl: 0, to: 0, pf: 0
												} , shots: []
											},
											{id: '7', name: 'Matthias', img: 'placeholder.jpg', active: true, selected: false, stats: {
												pts: 0, reb: 0, ast: 0, blk: 0, stl: 0, to: 0, pf: 0
												}, shots: []
											},
											{id: '9', name: 'Anthony', img: 'anthony.jpg', active: true, selected: false, stats: {
												pts: 0, reb: 0, ast: 0, blk: 0, stl: 0, to: 0, pf: 0
												}, shots: []
											}, 
											{id: '14', name: 'Mathieu', img: 'mathieu.jpg', active: true, selected: false, stats: {
												pts: 0, reb: 0, ast: 0, blk: 0, stl: 0, to: 0, pf: 0
												}, shots: []
											},
											{id: '6', name: 'Koen', img: 'placeholder.jpg', active: false, selected: false, stats: {
												pts: 0, reb: 0, ast: 0, blk: 0, stl: 0, to: 0, pf: 0
												}, shots: []
											},
											{id: '8', name: 'Seba', img: 'placeholder.jpg', active: false, selected: false, stats: {
												pts: 0, reb: 0, ast: 0, blk: 0, stl: 0, to: 0, pf: 0
												}, shots: []
											},
											{id: '10', name: 'Arthur', img: 'placeholder.jpg', active: false, selected: false, stats: {
												pts: 0, reb: 0, ast: 0, blk: 0, stl: 0, to: 0, pf: 0
												}, shots: []
											},
											{id: '12', name: 'Moens', img: 'placeholder.jpg', active: false, selected: false, stats: {
												pts: 0, reb: 0, ast: 0, blk: 0, stl: 0, to: 0, pf: 0
												}, shots: []
											},
										]);						
	
	function increaseStat (event) {		
		const stat = event.currentTarget.dataset.id;
		const newPlayers = players.map( (player) => {
			if (player.selected) {
				
				const newStats = Object.assign({}, player.stats);
				newStats[stat] = newStats[stat] + 1;
				const newPlayer = Object.assign({}, player, {stats: newStats});
				return newPlayer;
			}
			return player;
		});
		
		setPlayers(newPlayers);		
	}
	
	function decreaseStat (event) {
		
		const stat = event.currentTarget.dataset.id;
		const newPlayers = players.map( (player) => {
			if (player.selected) {
				
				const newStats = Object.assign({}, player.stats);
				newStats[stat] = Math.max(newStats[stat] - 1, 0);
				const newPlayer = Object.assign({}, player, {stats: newStats});
				return newPlayer;
			}
			return player;
		});
		setPlayers(newPlayers);		
	}
	
	function handlePlayerClick(id, event) {
		let newPlayers = players.map( (player) => {
			if (player.id === id) {
				let newPlayer = Object.assign({}, player, {selected: true});
				return newPlayer;
			
			} 
			if (player.selected === true && player.id !== id) {
				let newPlayer = Object.assign({}, player, {selected: false});
				return newPlayer;
			}
			return player;
		});
		
		setPlayers( newPlayers);
		// 	selected: !state.selected}); 
	}
	
	function addShot (id, x, y, event) {
		
		const newPlayers = players.map( (player) => {
			if(player.id === id) {
				let shots = player.shots.slice();

				shots.push({x: x, y:y, made: false});
				let newPlayer = Object.assign({}, player, {shots});
				return newPlayer;
			}
			return player;
		});
			
		setPlayers(newPlayers);
		
		
	}
	
	function subPlayer (id, event) {
				
		const newPlayers = players.map( (player) => {
			if(player.id === id) {
				let newPlayer = Object.assign({}, player, {selected: true, active: true});
				return newPlayer;
			}
			if (player.selected === true) {
				let newPlayer = Object.assign({}, player, {selected: false, active: false});
				return newPlayer;
			}
			return player;
		});
		
		setPlayers(newPlayers);
	}

	const selectedPlayer = players.find(player => player.selected === true);

	return ( 
		<div className="game">
			
			<Scoreboard 
				quarters = {quarters}
				teams = {teams}
				handleQuarterClick = {handleQuarterClick}
			/>
			<Gameboard 
				players = {players}
				selectedPlayer = {selectedPlayer}
				increaseStat = {increaseStat}
				decreaseStat = {decreaseStat}
				handlePlayerClick = {handlePlayerClick}
				subPlayer = {subPlayer}
				addShot = {addShot}
			/>	 			 
		</div>
	);
}

export default Game;