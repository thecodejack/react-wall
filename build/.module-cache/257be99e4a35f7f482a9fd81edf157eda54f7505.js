/** @jsx React.DOM */
var React = require('react'),
    Post = require('./Post');

var Wall  = React.createClass({displayName: "Wall",
    getInitialState: function() {
        posts: [{
            id: 1,
            post: "Hi There",
            comments: []
        },{
            id: 2,
            post: "Hello World",
            comments: []
        },{
            id: 3,
            post: "This is awesome",
            comments: []
        }]
    },
    render: function() {
        var posts = this.state.posts.map(function(postObj) {
            return React.createElement(Post, null);
        });
        return (
            React.createElement("div", null, 
                posts 
            )
        )
    }
});

module.exports = Wall;
