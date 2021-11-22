import React, {Component} from 'react';
import './Scoreboard.css';


class Scoreboard extends Component {
	
	render() {
		const teamA = this.props.teams[0];
		const teamB = this.props.teams[1];
		
		const quarters = this.props.quarters.map ( (quarter) => {
			const id = quarter.id;
			const className = quarter.active ? 'quarter active' : 'quarter';
				return (<div key={id}
						   	className={className}
							onClick = { (event) => this.props.handleQuarterClick (id, event)}
							>
							<span className="quarter-text">{quarter.name}</span>
					</div>);
		});
		
		return (
			<div className="header">
				<div className="score-container">
					<h1>{teamA.name}</h1>
					<h1 className="score">
						{teamA.score} - {teamB.score}
					</h1>
					<h1>{teamB.name}</h1>
				</div>

				<div className="quarters">
					{quarters}
					<button>End Game</button>
				</div>

			</div>
		);
	};
}

export default Scoreboard;