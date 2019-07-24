import React from 'react';

const Weather = (props) => (
        <div className = "weather__info">
        {props.temperature &&  <p className="weather__key">기온 : {props.temperature}</p>} 
        {props.humidity && <p className="weather__key">습도 : {props.humidity}</p>}
        {props.description && <p className="weather__key">상태 : {props.description}</p>}
    </div> 
)

/*this makes classes, not necessary because no states are needed

class Weather extends React.Component{
    render(){
    return(
        //only make object if both are true objects right is always true so only the left matters
     <div>
         Weather Component
         {this.props.temperature &&  <p>기온 : {this.props.temperature}</p>} 
         {this.props.humidity && <p>습도 : {this.props.humidity}</p>}
         {this.props.description && <p>상태 : {this.props.description}</p>}
     </div>
    )
  }
}

*/
export default Weather;
