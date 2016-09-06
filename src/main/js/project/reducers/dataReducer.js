var Redux = require('redux');

var projectReducer = require('project/reducers/projectReducer.js');
var pairingHistoryReducer = require('project/reducers/pairingHistoryReducer.js');
var flashReducer = require('project/reducers/flashReducer.js');

var dataReducer = Redux.combineReducers({
    project: projectReducer,
    pairingHistory: pairingHistoryReducer,
    flashReducer: flashReducer
});

module.exports = dataReducer;
