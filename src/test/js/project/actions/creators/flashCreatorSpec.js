var flashCreators = require('project/actions/creators/flashCreators.js');

it('returns ADD_FLASH_MESSAGE action with message', function () {
    var action = flashCreators.addFlashMessage('Some Message');
    expect(action.type).toBe('ADD_FLASH_MESSAGE');
    expect(action.message).toBe('Some Message');
});