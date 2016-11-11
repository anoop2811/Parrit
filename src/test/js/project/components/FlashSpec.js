var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestUtils = require('react-addons-test-utils');

var RenderComponent = require('support/RenderComponent.js');

var Flash = require('project/components/Flash.js');

describe('Flash', function() {
    var props;
    var flash;
    var flashElement;

    it('does not render without a message', function() {
        props = {
            message: ''
        };
        flash = RenderComponent(Flash, <Flash {...props} />);
        flashElement = ReactDOM.findDOMNode(flash);
        expect(flashElement).toBeNull();
    });

    it('does render with a message', function() {
        props = {
            type: 'meaningless',
            message: 'Hi Liam'
        };

        flash = RenderComponent(Flash, <Flash {...props}/>);
        flashElement = ReactDOM.findDOMNode(flash);
        expect(flashElement).not.toBeNull();
        expect(flashElement.innerText).toEqual('Hi Liam');
    });
});