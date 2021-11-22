import React, {Component} from 'react';
import './Modal.css';

class Modal extends Component {
	
		
	render() {
		if (!this.props.show) {
			return null;
		}

		return ( 
			<div className="modal" id="modal">
				<h2> Modal Window</h2>

				<div className="content"> 
					{this.props.children}
				</div>

				<div className="actions">
					<button > Make < /button>
					<button > Miss < /button>
					<button > Cancel < /button>
				</div>
			</div>
		);
	}
}
	
export default Modal;