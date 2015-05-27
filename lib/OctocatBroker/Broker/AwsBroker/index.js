var AWS = require('aws-sdk')
var util = require('util')
var EventEmitter = require('eventemitter2').EventEmitter2


function AwsBroker(eventOpts){
    EventEmitter.call(this, eventOpts)
    
}