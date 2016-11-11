import React from "react";

var Flash = React.createClass({
    propTypes: {
        message: React.PropTypes.string.isRequired
    },

    render: function () {
        if(this.props.message)
            return <span>{this.props.message}</span>;
        return false;
    }
});

module.exports = Flash;