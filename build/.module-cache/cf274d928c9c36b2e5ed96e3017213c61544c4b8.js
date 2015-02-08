/** @jsx React.DOM */
var React = require('react');

var Wall  = React.createClass({displayName: "Wall",
    render: function() {
        return (
            React.createElement(Post, null)
        )
    }
});

module.exports = Wall;
