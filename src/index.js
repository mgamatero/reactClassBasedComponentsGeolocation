import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

    //JUST DO IT!!!!  Add props.  JUST DO IT!!!!
    constructor(props) {
        super(props)
        this.state = {
            latitude: null,
            longitude: null,
            errorMessage: ''
        };     
    };

    // This works too --  Better to initialize
    // state = {
    //     latitude: null,
    //     longitude: null,
    //     errorMessage: ''
    // };     
    
    
    componentDidMount() {
        // console.log('CompenentDidMount')
        //geolocation API
        window.navigator.geolocation.getCurrentPosition(
            position => {
            console.log(position)
            this.setState({ latitude: position.coords.latitude })
            this.setState({ longitude: position.coords.longitude })
            },
            err => {
                console.log(err)
                this.setState({ errorMessage: err.message });
            }
        );
    }
    // }
    // componentDidUpdate(){
    //     console.log('CompenentDidUpdate - Rerendered')
    // }
    render() {

        // Conditional rendering
        if (this.state.errorMessage && !this.state.latitude && !this.state.longitude) {
            return (
                <div>Error: {this.state.errorMessage}</div>
            )
        }
        if (!this.state.latitude && !this.state.longitude && !this.state.err) {
            return (
                <Spinner message="Loading...Default not used..."/>
            )
        }
        else {
            return (
                <div>
                    <SeasonDisplay latitude={this.state.latitude}/>
                    
                </div>
            )
        }









    }
};

ReactDOM.render(
    <App />, document.querySelector('#root')
);

