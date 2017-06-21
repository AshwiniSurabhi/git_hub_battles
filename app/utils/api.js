var axios = require('axios');
var id = " YOUR_CLIENT_ID"
var sec = "?client_id="+id+"&client_secret="+sec;
var params = "?client_id=" +id+ "&client_secret="+sec;

function getProfile(username){
	return axios.get('https://api.github.com/users/'+username)
	.then(function(user){
		return user.data;		
	});
}

function getRepos(username){
	return axios.get('https://api.github.com/users/'+username+'/repos');
}

function getStarCount(repos){
	return repos.data.reduce(function(acc,data){
		return acc+data.stargazers_count;
	},0);
}

function calculateScore(profile, repos){
	var followers = profile.followers;
	var totalStars = getStarCount(repos);
	return (followers*3) + totalStars;
}

function handleError(error){
	console.warn(error);
	return null;
}

function getUserData(player){
	//axios.all takes an array of promises and once all the promises are resolved it calls the
	//function written in then .
	return axios.all([getProfile(player),getRepos(player)]).then(function(data){
		//data is the array of return values from the above passed promises.
		var profile = data[0];
		var repos = data[1];
		return {
			profile: profile,
			score: calculateScore(profile,repos)
		}

	});
}

function sortPlayers(players){
	return players.sort(function(a,b){
		return b.score-a.score;
	});
}

//api.battle(['tyler','ean'])
//.then(function(players){
//	players[0]
//})

module.exports = {
	battle: function(players){
		return axios.all(players.map(getUserData))
		.then(sortPlayers)
		.catch(handleError)

	},

	fetchPopularRepos: function(language){
		//encodeURI encodes the human
		var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+language+'&sort=stars&order=desc&type=Repositories');
	//function is executed when the  call to the URI is resolved it sends an response object
	return axios.get(encodedURI).then(function(response){
		//this return returns data to the fetchPopularRepos. Items is the list of repositories.
		return response.data.items;

	})
	}
}

//res below is the response from the above return statement response.data.items based on promise api :P 
//fetchPopularRepos('Java').then(function(res))
