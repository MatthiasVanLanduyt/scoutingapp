import React, {useState, useEffect} from 'react';
import Team from './Team.js';
import Modal from './Modal.js';
import './Gameboard.css';
import Scouting from './Scouting.js';

function Gameboard(props) {
	
	const [showBench, setShowBench] = useState(false);
	const [showShotModal, setShowShotModal] = useState(false);
	
	// static defaultProps = {
    // 	player: {
	// 		name: "",
	// 		stats: {
	// 			pts: 0, reb: 0, ast: 0, blk: 0, stl: 0, to: 0, pf: 0
	// 		},
	// 		shots: []
	// 	}
  	// }

	function toggleBench () {	
		setShowBench(!showBench);
	}

	function toggleShowShotModal () {
		setShowShotModal(!showShotModal);
	}

		const {selectedPlayer, players} = props;
		const selectedName = selectedPlayer.name;

		return (
			<div className="gameboard">
				<Team 
					players={players}
					selectedPlayer={selectedPlayer}
					handlePlayerClick={props.handlePlayerClick}
					showBench = {showBench}
					toggleBench = {toggleBench}
					subPlayer = {props.subPlayer}
					/>
				<Scouting
					selectedPlayer={selectedPlayer}
					toggleShowShotModal={toggleShowShotModal}
				/>
			</div>
		);
}

export default Gameboard;