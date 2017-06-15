var React = require('react');
var Popular = require('./popular');
//creating a React component with javascript classes. App is a component here.components can have state, lifecycle, UI
class App extends React.Component{
	//UI for component
	render(){
		//This is JSX , not a valid javascript syntax. So we use webpack and babel to transform it into a valid js.
		return(
			<div>
				<Popular/>
			</div>
			//equivalent js for above code would be
			//React.createElement(
			//	"div",
			//	null,
			//	"Hello World!");
			)
		}
}

module.exports = App;
