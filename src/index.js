//react packages are installed through package.json
var React = require('react');
var ReactDOM = require('react-dom');
var Show = require('./show');
var shows = require('./shows');



ReactDOM.render(
    <Show shows={shows} />,
    document.getElementById('root')
);

//first param - element to create, second param- attributes any on the element needed, 
//third param - content children which needs to sit inside the element which is abt to create
//var App = React.createElement('h1', null, 'Hello World');

//var App = <h1>Hello World</h1>;

// var Component = function(props){
//     return (
//         <div style={{color: props.color}}>  
//             <h1>{props.greeting}</h1>
//         </div>
//     );
// };

// var Component = createClass({
//     getInitialState: function () {
//         return {
//             color: 'blue'
//         }
//     },
//     handleButtonClick: function(){
//         this.setState(function(prevState){
//             return {
//                 color: (prevState.color === 'blue') ? 'green' : 'blue'
//             }
//         });
//     },
//     render: function () {
//         console.log('inside render'+ this.state.color)
//         return (
//             <div>
//                 <div style={{ color: this.state.color }}>
//                     <h1>{this.props.greeting}</h1>
//                 </div>
//                 <button onClick={this.handleButtonClick}>Click Me</button>
//             </div>
//         );
//     }
// });

//root is the mount point which is mentioned in the index.html
//ReactDOM.render(Component, document.getElementById('root'));

//ReactDOM.render(React.createElement(Component), document.getElementById('root'));
//ReactDOM.render(<Component></Component>, document.getElementById('root'));

// ReactDOM.render(
//     <Component greeting="Hello World" />,
//     document.getElementById('root')
// );