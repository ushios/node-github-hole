var assert = require("assert")
var should = require('should')
var OctocatBroker = require("../")

describe('Octcat Broker.', function(){
    it('OctcatBroker prepare for github', function(done){
        var broker = new OctocatBroker()

        broker.on('ready_github', function(){
            broker.cidrs.length.should.be.above(0)
            done()
        })

        broker.on('failed_github', function(){
            false.should.be.ok
            done()
        })

        broker.prepareGithub()
    })
})
