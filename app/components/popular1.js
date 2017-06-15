var React = require('react');

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
		var languages =[ 'All', 'JavaScript','Ruby','Java','Css','python'];
		return (
			<div>
				<ul className = 'languages'>
				<p> selectedLanguage: { this.state.selectedLanguage}</p>
				{languages.map(function(item){
					
					return (
						<li 
						style = { item == this.state.selectedLanguage ? {color:'#d0021b'}:null}
						onClick = {this.updateLanguage.bind(null, item)}
						key = {item}> 
						{item}
						</li>
						)
				},this)}
				</ul>
			</div>
			)
	}
}

module.exports = Popular;
