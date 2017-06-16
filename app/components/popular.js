var React = require('react');
var propTypes = require('prop-types')
var api = require('../utils/api');

function SelectLanguage(props){
	var languages =[ 'All', 'JavaScript','Ruby','Java','Css','python'];
	return(
		<ul className = 'languages'>
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

function RepoGrid(props){
	return(
		<ul className='popular-list'>
			{props.repos.map( function (repo, index) {
				return (
					<li key = {repo.name} className = 'popular-item'>
						<div className='popular-rank'>#{index+1}</div>
						<ul className = 'space-list-items'>
							<li>
								<img 
									className='avatar'
									src = {repo.owner.avatar_url}
									alt = {'Avatar for'+repo.owner.login}
								/>
							</li>
							<li>
								<a href={repo.html_url}>{repo.name}</a>
							</li>
							<li>
								@{repo.owner.login}
							</li>
							<li>{repo.stargazers_count} stars</li>
						</ul>
					</li>
					)
			})}

		</ul>
		)
}


RepoGrid.propTypes = {
	repos : propTypes.array.isRequired
}
SelectLanguage.propTypes = {
	selectedLanguage: propTypes.string.isRequired,
	onSelect: propTypes.func.isRequired
}




class Popular extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			selectedLanguage: 'All',
			repos: null
		};
		this.updateLanguage = this.updateLanguage.bind(this);
	}

	//lifecycle method that executes when the DOM is Mounted 
	componentDidMount(){
		this.updateLanguage(this.state.selectedLanguage);
	}

	updateLanguage(lang){
		this.setState(function(){
			return {
				selectedLanguage: lang,
				repos : null
			}
		});

	api.fetchPopularRepos(lang).then(function(repos){
			this.setState(function(){
				return {
					repos : repos
				}
			})
			//.bind(this) bcz function makes this to undefined 
		}.bind(this)); 		

	}
	render(){
		return (
			<div>
				<SelectLanguage
				selectedLanguage = {this.state.selectedLanguage}
				onSelect = {this.updateLanguage}/>
				{this.state.repos ? <RepoGrid repos = {this.state.repos}/> : <p>Loading...</p> }
			</div>
			)
	}
}

module.exports = Popular;
