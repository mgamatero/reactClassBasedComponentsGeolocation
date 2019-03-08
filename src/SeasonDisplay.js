import './SeasonDisplay.css';
import React from 'react';
import ReactDOM from 'react-dom';

//You can place logic out here too
const getSeason = (lat,month) =>{
    if (month>2 && month<9){
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

// const seasonConfig = { my try here
//     icon: getSeason() === 'winter' ? 'snowflake' : 'sun',
//     text: getSeason() === 'winter' ? 'Brrrr, it is chilly' : 'Time for the beach!!!'
// }

const seasonConfig = {
    summer:{
        icon:'sun',
        text:'Time for the beach!!!'
    },
    winter:{
        icon:'snowflake',
        text:'Brrrr, it is chilly!!!'
    }
}



const SeasonDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth());
    //destructuring...if not you say seasonConfig[season].text....ugly
    const {text,icon} = seasonConfig[season];


    console.log(season,props.latitue)

    return (
        <div className = {`season-display ${season}`}>
        <i className={`${icon} icon massive icon-left`}/>
        <h1>{text}</h1>
        <i className={`${icon} icon massive icon-right`}/>
        
        </div>
    )
};

export default SeasonDisplay;