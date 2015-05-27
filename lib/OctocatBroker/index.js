var AWS = require('aws-sdk')
var request = require('request')
var util = require('util')
var EventEmitter = require('eventemitter2').EventEmitter2

function　GithubHole(opts){
    EventEmitter.call(this, opts)
    var _this = this

    this.host          = "https://api.github.com:443"
    this.path          = "meta"
    this.securityGroup = null
    this.cidrs         = []


    this.prepareGithub = function() {
        var options = {
            url       : _this.host + '/' + _this.path,
            json      : true,
            headers   : {
                'User-Agent'  : "npm module aws-github-hole" // required github api
            }
        }

        request.get(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                _this.cidrs = body.hooks
                _this.emit('ready_github')
            } else {
                _this.emit('failed_github')
            }
        })
    }
}

util.inherits(GithubHole, EventEmitter)

// Exports
module.exports = GithubHole
