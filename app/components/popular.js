var React = require('react');

class Popular extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			selectedLanguage: 'All'
		};
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
				{languages.map(function(item){
					
					return (
						<li key = {item}> 
						{item}
						</li>
						)
				})}
				</ul>
			</div>
			)
	}
}

module.exports = Popular;
