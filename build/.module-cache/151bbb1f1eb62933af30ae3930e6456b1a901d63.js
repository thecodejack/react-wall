/** @jsx React.DOM */
var React = require('react'),
    Post = require('Post');

var Wall  = React.createClass({displayName: "Wall",
    render: function() {
        return (
            React.createElement(Post, null)
        )
    }
});

module.exports = Wall;
