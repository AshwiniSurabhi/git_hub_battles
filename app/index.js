var React = require('react');
var ReactDOM = require('react-dom');
//any css we include is included in app when everything bundles
require('./index.css');
var App = require('./components/App');

//rendering component to dom using reactdom
ReactDOM.render(

	//JSX for telling react that we want to use the component
	<App />,
	document.getElementById('app')
);
