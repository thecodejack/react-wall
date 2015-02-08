/** @jsx React.DOM */
var React = require('react');

var Post  = React.createClass({displayName: "Post",
    render: function() {
        return (
            React.createElement("h1", null, "Hello World")
        )
    }
});

module.exports = Post;
