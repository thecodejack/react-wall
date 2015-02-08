var post = {};
post.createPost = function(id, text) {
    return {
        id: id || 0,
        text: text || '',
        comments: []
    }
}

module.exports = post;
