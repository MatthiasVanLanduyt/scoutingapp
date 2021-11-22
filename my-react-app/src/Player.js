import React, {useState, useEffect} from 'react';
import './Player.css';

function Player (props) {
	
	function handleClick (event) {
		props.handlePlayerClick(props.id, event);
	}
	
	function handleArrowClick(event) {
		
		if (props.active === true) {
			props.toggleBench(props.id, event);
		} 
		if (props.active === false) {
			event.stopPropagation();
			props.subPlayer(props.id, event);
			props.toggleBench(props.id, event);
		}
	}
	
	
	
	
		
	const {pts, reb, ast} = props.stats;
	let className = (props.selected ? 'player-card player-card-horizontal' : 'player-card player-card-vertical'); 
		
		return (
			<div 
				className={className}
				onClick = {handleClick}
				>
				<img 
					src={props.img}
					alt="player"
					className="player-avatar"
				/>
				<div className="player-card-title">
						<span># {props.id} - {props.name }</span>
						<span 
							className="player-card-title-right"
							onClick = {handleArrowClick}
							>&#8594;</span>
				</div>
				<div className="card-content">
					<div className="player-stats">
							<div>
								<span>PTS - </span>
								<span>{pts}</span>
							</div>
							<div>
								<span>REB - </span>
								<span>{reb}</span>
							</div>
							<div>
								<span>AST - </span>
								<span>{ast}</span>
							</div>
					</div>
				</div>
			</div>
		);
}

export default Player;