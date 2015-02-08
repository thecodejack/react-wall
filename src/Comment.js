/** @jsx React.DOM */
var React = require('react');

var comment = React.createClass({
    render: function() {
        return (
            <div className="ui segment attached secondary">
                {this.props.data.text}
            </div>
        )
    }
})

module.exports = comment;
