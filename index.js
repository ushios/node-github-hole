var GithubHole = require('./lib/GithubHole')

//module.exports = GithubHole

var githubHole = new GithubHole()

githubHole.on('ready', function(){
    
})

githubHole.on('failed', function(){
    
})

githubHole.prepare()