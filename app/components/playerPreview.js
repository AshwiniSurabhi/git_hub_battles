var React = require('react');
var propTypes = require('prop-types');

function PlayerPreview(props){
	return(
		<div>
			<div className='column'>
				<img
					className = 'avatar'
					src = {props.avatar}
					alt = {'Avatar for' +props.username}
				/>
				<h2 className='username'>@{props.username}</h2>
			</div>
			{props.children} 
		</div>
		)
}

PlayerPreview.propTypes= {
	avatar : propTypes.string.isRequired,
	username: propTypes.string.isRequired,
}

module.exports = PlayerPreview;
