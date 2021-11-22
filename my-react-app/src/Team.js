import React, {useState, useEffect} from 'react';
import Player from './Player';
import './Team.css';


function Team (props) {
		// const selectedPlayer = props.players.find(player => player.selected === true);
		const selectedPlayer =  () => {
			return (
				<Player 
					selected = {props.selectedPlayer.selected}
					key={props.selectedPlayer.id} 
					id={props.selectedPlayer.id}
					active = {props.selectedPlayer.active}
					name= {props.selectedPlayer.name} 
					img = {props.selectedPlayer.img}
					stats = {props.selectedPlayer.stats}
					handlePlayerClick={props.handlePlayerClick}
					toggleBench={props.toggleBench}
				/>
		)};

		const activePlayers = props.players.filter( player => (player.active && !player.selected));
		const benchPlayers = props.players.filter( player => !player.active);
		const players = activePlayers.map (player => {
						
			return (
				<Player 
					selected = {player.selected}
					key={player.id} 
					id={player.id}
					active = {player.active}
					name= {player.name} 
					img = {player.img}
					stats = {player.stats}
					handlePlayerClick={props.handlePlayerClick}
					toggleBench={props.toggleBench}
					/>
			);
		});
		const bench = benchPlayers.map (player => {
			return (
				<Player 
					key={player.id} 
					name= {player.name}
					id={player.id}
					active = {player.active}
					img = {player.img}
					stats = {player.stats}
					subPlayer = {props.subPlayer}
					toggleBench={props.toggleBench}
					className="player-card" />
			);
		});
		
	
		
		return (
			<div className="team">
				<div className="selectedPlayer">
					{selectedPlayer()}
				</div>	
				<div className="playerlist activePlayers">	
					{players}
				</div>

				{props.showBench && 	
					<div className="playerlist benchPlayers">	
						{bench}
					</div>	
				}
			</div>
			
		);
}
export default Team;