var React = require('react');
//no more required as we are using es6 class
//var createClass = require('create-react-class');

//react native way of writing class components without es6 classes usage
// var Title = createClass({
//     render: function () {
//         return (
//             <h3>Title: {this.props.showTitle}</h3>
//         );
//     }
// });

class Title extends React.Component{
    // the below is done by default constructor any way
    // constructor(props){
    //     super(props);    
    // }
    render(){
        return (
            <h3>Title: {this.props.showTitle}</h3>
        );
    }
}


// var Poster = createClass({
//     render: function () {
//         return (
//             <img src={this.props.showPoster} alt="Show Poster" style={{ height: 400, width: 400 }} />
//         )
//     }
// });

class Poster extends React.Component{
    render(){
        return (
            <img src={this.props.showPoster} alt="Show Poster" style={{ height: 400, width: 400 }} />
        );
    }
}

// var ShowInfo = createClass({
//     render: function () {
//         return (
//             <div>
//                 <p>Plot: {this.props.showPlot}</p>
//                 <h5>IMDB Rating: {this.props.showRating}</h5>
//             </div>
//         );
//     }
// });

class ShowInfo extends React.Component{
    render(){
        return (
             <div>
                <p>Plot: {this.props.showPlot}</p>
                <h5>IMDB Rating: {this.props.showRating}</h5>
            </div>
        );
    }
}

class Show extends React.Component{
    //this way of initializing the default props is not es6 feature but it is es next feature
    static defaultProps = {
        showIndex: 0
    }
    constructor(props){
        super(props);
        this.state = {
            showIndex: this.props.showIndex
        };
    }
    handleShowButton(){
        var totalShows = this.props.shows.length;
        this.setState(function(prevState){
            return{
                 showIndex: (prevState.showIndex + 1) % totalShows
            }
        });
    }
    render(){
        // bind is used in the onclick because when the button is clicked the context of this is refered to the react dom event context
        //but is should not, it should have the context of our Show Component. So we are using bind
        //and this is not the best way to write inside the render
        var show = this.props.shows[this.state.showIndex];
        return(
            <div className="text-center">
                <Title showTitle={show.title}/>
                <Poster showPoster={show.poster}/>
                <ShowInfo showPlot={show.plot} showRating={show.imdbRating}/>
                <button onClick={this.handleShowButton.bind(this)}>Next Show</button>
            </div>
        )
    }
}

//to initialize the default props..this is one way
// Show.defaultProps = {
//     showIndex: 0
// }

// var Show = createClass({
//     //initializes the showIndex property if is not passes from outside
//     getDefaultProps: function(){
//         return{
//             showIndex: 0
//         }
//     },
//     getInitialState: function(){
//         return{
//             showIndex: this.props.showIndex 
//         }
//     },
//     handleShowButton: function(){
//         var totalShows = this.props.shows.length;
//         this.setState(function(prevState){
//             return{
//                  showIndex: (prevState.showIndex + 1) % totalShows
//             }
//         });
//     },
//     render: function () {
//         var show = this.props.shows[this.state.showIndex];
//         return (
//             <div className="text-center">
//                 <Title showTitle={show.title}/>
//                 <Poster showPoster={show.poster}/>
//                 <ShowInfo showPlot={show.plot} showRating={show.imdbRating}/>
//                 <button onClick={this.handleShowButton}>Next Show</button>
//             </div>
//         );
//     }
// });

module.exports = Show;