/** @jsx React.DOM */
var React = require('react'),
    Post = require('./Post'),
    modelPost = require('./model/post');

var Wall  = React.createClass({
    getInitialState: function() {
        return {
            title: 'My Wall',
            posts: [{
                id: 0,
                text: "Hi There",
                comments: [{
                    id: 1,
                    text: '123'
                },{
                    id: 2,
                    text: '123 123'
                }]
            },{
                id: 1,
                text: "Hello World",
                comments: []
            },{
                id: 2,
                text: "This is awesome",
                comments: []
            }]
        };
    },
    createPost: function(event) {
        var elemVal;
        if(event.charCode == 13) {
            elemVal = event.target.value;
            if(elemVal && elemVal != "") {
                var posts = this.state.posts,
                    curId = posts.length ? posts[(posts.length)-1].id : -1;
                this.state.posts.push(modelPost.createPost(curId+1, elemVal));
                event.target.value = "";
                this.forceUpdate();
                event.preventDefault();
            }
        }
    },
    deletePost: function(postObj) {
        var index = this.state.posts.indexOf(postObj);
        this.state.posts.splice(index,1);
        this.forceUpdate();
    },
    render: function() {
        var posts = this.state.posts.reverse().map(function(postObj) {
            return <Post key={postObj.id} data={postObj} onDelete={this.deletePost}/>;
        }.bind(this));
        return (
            <div className="container ui form">
                <h1>{this.state.title}</h1>
                <textarea placeholder="Post Something" onKeyPress={this.createPost}></textarea>
                <div className="html ui top attached segment">
                    { posts }
                </div>
            </div>
        )
    }
});

module.exports = Wall;
