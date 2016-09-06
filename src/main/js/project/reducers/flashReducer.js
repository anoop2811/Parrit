var flashReducer = function(state, action) {
    if(typeof state === 'undefined') {
        return {
            type: '',
            text: ''
        };
    }

    switch(action.type) {
        case 'ADD_FLASH_MESSAGE':
            return [
                ...state,
                {
                    type: action.message.type,
                    text: action.message.text
                }
            ];

        default: return state;
    }
};

module.exports = flashReducer;