var React = require('react'),
    Post = require('./Post');

var reactComponent = React.renderComponent(
    React.createElement(Wall, null),
    document.getElementById('app')
);
