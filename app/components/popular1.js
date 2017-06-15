var React = require('react');
var propTypes = require('prop-types')

function SelectLanguage(props){
	var languages =[ 'All', 'JavaScript','Ruby','Java','Css','python'];
	return(
		<ul className = 'languages'>
				<p> selectedLanguage: { props.selectedLanguage}</p>
				{languages.map(function(item){
					
					return (
						<li 
						style = { item === props.selectedLanguage ? {color:'#d0021b'} : null}
						onClick = {props.onSelect.bind(null, item)}
						key = {item}> 
						{item}
						</li>
						)
				})}
				</ul>

		)
}

SelectLanguage.propTypes = {
	selectedLanguage: propTypes.string.isRequired,
	onSelect: propTypes.func.isRequired
}


class Popular extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			selectedLanguage: 'All'
		};
		this.updateLanguage = this.updateLanguage.bind(this);
	}
	updateLanguage(lang){
		this.setState(function(){
			return {
				selectedLanguage: lang
			}
		});
	}
	render(){
		return (
			<div>
				<SelectLanguage
				selectedLanguage = {this.state.selectedLanguage}
				onSelect = {this.updateLanguage}/>
			</div>
			)
	}
}

module.exports = Popular;
