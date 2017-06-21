var React = require('react');
var propTypes = require('prop-types');

var styles = {
	content: {
		textAlign: 'center',
		fontSize: '35px'
	}
};

class Loading extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			text: props.text
		};
	}

	componentDidMount(){
		var standard = this.props.text + '...';
		this.interval = window.setInterval(function(){
			if(this.state.text === standard){
				this.setState(function(){
					return {
						text: this.props.text
					}
				});
			}
			else{
					this.setState(function(prevVal){
						return{
							text: prevVal.text+'.'
						}
				});
			}
		}.bind(this),300);
	}

	componentWillUnmount(){
		window.clearInterval(this.interval);
	}


	render(){
		return(
		<p style = {styles.content}>
			{this.state.text}
		</p>
		)
	}
}

Loading.propTypes = {
	text: propTypes.string.isRequired
};

Loading.defaultProps = {
	text: 'Loading'
}
module.exports = Loading;
