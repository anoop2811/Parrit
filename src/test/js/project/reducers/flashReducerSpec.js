var deepFreeze = require('deep-freeze');
var flashReducer = require('project/reducers/flashReducer.js');

it('should get the default state', function () {
    var stateBefore = undefined;
    var action = {};
    var stateAfter = {
        type: '',
        text: ''
    };

    expect(
        flashReducer(stateBefore, action)
    ).toEqual(stateAfter);
});

it('should set the text to the passed in text when action is ADD_FLASH_MESSAGE', function () {
    var stateBefore = {
        type: '',
        text: ''
    };

    var action = {
        type: 'ADD_FLASH_MESSAGE',
        message: {type: 'success', text: 'Some Text'}
    };

    var stateAfter = [{
        type: 'success',
        text: 'Some Text'
    }];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        flashReducer(stateBefore, action)
    ).toEqual(stateAfter);
});