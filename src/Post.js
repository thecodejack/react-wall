var React = require('react'),
    Comment = require('./Comment');

var Post  = React.createClass({
    getInitialState: function() {
        return {
            editMode: false
        };
    },
    deleteHandler: function(event) {
        this.props.onDelete(this.props.data);
    },
    editHandler: function() {
        this.setState({
            editMode : true
        });
    },
    saveEditHandler: function(event) {
        var elemVal = event.target.value;
        if(event.which == 13 && elemVal.trim() != "") {
            this.props.data.text = elemVal;
            this.setState({
                editMode : false
            });
            event.stopPropagation();
        } else if(event.which == 27) {
            this.setState({
                editMode : false
            });
            event.target.value = "";
            event.stopPropagation();
        }
    },
    addComment: function(event) {
        var elemVal,
            curId,
            comments = this.props.data.comments;
        if(event.which == 13) {
            elemVal = event.target.value;
            if(elemVal.trim() != "") {
                curId = comments.length ? comments[(comments.length)-1].id : -1;
                comments.push({
                    id: curId+1,
                    text: elemVal
                });
                event.target.value = "";
                this.forceUpdate();
                event.preventDefault();
                event.stopPropagation();
            }
        }
    },
    render: function() {
        var comments = this.props.data.comments.map(function(comment){
            return <Comment data={comment} key={comment.id}/>;
        }),
            content = <h3>{ this.props.data.text }</h3>;
        if(this.state.editMode) {
            content = <textarea onKeyDown={this.saveEditHandler} autofocus>{this.props.data.text}</textarea>;
        };
        return (
            <div className="ui raised segment">
                {content}
                <div className="ui button right floated" onClick={this.editHandler}>Edit</div>
                <div className="ui red button right floated" onClick={this.deleteHandler}>Delete</div>
                <h4 className="ui horizontal header divider">
                    Comments
                </h4>
                <div className="field">
                    <textarea placeholder="Reply" className="comment" onKeyDown={this.addComment}></textarea>
                </div>
                {comments}
            </div>
        );
    }
});

module.exports = Post;
