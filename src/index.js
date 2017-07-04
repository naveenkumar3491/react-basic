//react packages are installed through package.json
var React = require('react');
var ReactDOM = require('react-dom');

//first param - element to create, second param- attributes any on the element needed, 
//third param - content children which needs to sit inside the element which is abt to create
//var App = React.createElement('h1', null, 'Hello World');

//var App = <h1>Hello World</h1>;

var Component = function(props){
    return (
        <div style={{color: props.color}}>  
            <h1>{props.greeting}</h1>
        </div>
    );
};

//root is the mount point which is mentioned in the index.html
//ReactDOM.render(Component, document.getElementById('root'));

//ReactDOM.render(React.createElement(Component), document.getElementById('root'));
//ReactDOM.render(<Component></Component>, document.getElementById('root'));
ReactDOM.render(
    <div>
    <Component greeting="Hello World" color="green"/>
    <Component greeting="Hello there" color="blue"/>
    </div>,
     document.getElementById('root')
);