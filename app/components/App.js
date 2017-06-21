var React = require('react');
var Popular = require('./popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle');
var Switch = ReactRouter.Switch;
var Results = require('./results');
//creating a React component with javascript classes. App is a component here.components can have state, lifecycle, UI

class App extends React.Component{
	//UI for component
	render(){
		//This is JSX , not a valid javascript syntax. So we use webpack and babel to transform it into a valid js.
		return(
			<Router>
				<div className = 'container'>
					<Nav/>
					<Switch>
						<Route exact path='/' component={Home}/>
						<Route exact path='/popular' component={Popular} />
						<Route exact path='/battle' component={Battle} />
						<Route path='/battle/results' component = {Results}/>
						<Route render={function(){
							return <p>Not Found</p>
						}}/>
					</Switch>
				</div>
			</Router>
			)
		}
}

module.exports = App;
