var React = require('react');
var Flash = require('./Flash.js');

var Header = React.createClass({
    propTypes: {
        setPairingHistoryPanelOpen: React.PropTypes.func.isRequired,
        isPairingHistoryPanelOpen: React.PropTypes.bool.isRequired,
        postLogout: React.PropTypes.func.isRequired,
        flash: React.PropTypes.object.isRequired
    },

    render: function() {
        var classes = 'history' + (this.props.isPairingHistoryPanelOpen ? ' open' : '');
        return <header>
            <Flash {...this.props.flash} />
            <a href="/" className="header-logo"/>
            <div className="links">
                <h3 className="logout" onClick={this.props.postLogout}>LOGOUT</h3>
                <a href="https://docs.google.com/forms/d/1Xg5xKGv0uLcRLA3WR9CiwE3tfz6-5ocGcImq6_MgLB4/viewform" target="_blank">
                    <h3 className="feedback">feedback</h3>
                </a>
                <h3 className={classes} onClick={this.props.isPairingHistoryPanelOpen ? this.closePairingHistoryPanel : this.openPairingHistoryPanel}>HISTORY
                    <div className={this.props.isPairingHistoryPanelOpen ? 'history-caret-right' : 'history-caret-left'}></div>
                </h3>
            </div>
        </header>
    },

    openPairingHistoryPanel: function() {
        this.props.setPairingHistoryPanelOpen(true);
    },

    closePairingHistoryPanel: function() {
        this.props.setPairingHistoryPanelOpen(false);
    }
});

module.exports = Header;