import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    
    //JUST DO IT!!!!
    constructor() {
        super()
        this.state ={
            latitude : 0
        }
    }

    // window.navigator.geolocation.getCurrentPosition((position) => console.log(position),
    //     err => console.log(err)
    //     );

    render(){

        //geolocation API
        window.navigator.geolocation.getCurrentPosition((position) => 
        {console.log(position)
        this.setState({latitude:position.coords.latitude})
        },
        err => console.log(err)
        );



        return <div>Latitude: {this.state.latitude}</div>
    }
};

ReactDOM.render(
    <App />, document.querySelector('#root')
);

