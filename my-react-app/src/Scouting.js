import React, {useState} from 'react';
import './Scouting.css';

function Stats(props) {
    
    const [count] = useState(0);
    // const { players } = {...props};
    const selectedPlayer = props.selectedPlayer;
    // const selectedName = selectedPlayer.name;
    const arrayStats = Object.keys(selectedPlayer.stats);

    const stats= arrayStats.map((stat) => {
        return (

                <button key={stat} 
                        className="stat"
                        data-id={stat}
                        onClick={props.increaseStat}
                        >
                    <h2 className="stat-label">{stat.toUpperCase()}</h2>
                </button>
        )
    });

    const shots = selectedPlayer.shots.map ((shot) => {
				
        const divStyle = {
            left:shot.x,
            top:shot.y,
            color: shot.made ? 'green' : 'red'
        }
        return(
            <div 
                className="gameboard-shot"
                style={divStyle}
            >
                {shot.made ? 'O' : 'X'}
            </div>
        )
    });

    const boardClick = (event) => {
		let x = (event.pageX - event.currentTarget.offsetLeft) + 'px';
		let y = event.pageY - event.currentTarget.offsetTop + 'px';
		
		props.toggleShowShotModal();
		
		props.addShot (props.player.id, x, y, event);
		
	}

    return (
        <div className="scouting">
            <h1>Stats</h1>
            <div className="stats">
                {stats}
            </div>
            <h1>Shots</h1>
            <div className = "shotchart"
					alt="court"
					onClick = {boardClick}
			>
                {shots}
            </div>
        </div>


    )

}			
				
export default Stats;