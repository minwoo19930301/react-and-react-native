import React from 'react';
import Title from './Title.js';
import Form from './Form.js';
import Weather from './Weather.js';


//const API_KEY = "76d042c17320259413cd6a9a2788caa5"; //current API local key for me sent by openweather.org's e-mail

class App extends React.Component{
  //state for things to display in weather component
  state = {
    temperature: undefined, //left is the initialized reference, right is to default it
    humidity: undefined,
    description: undefined,
    date: new Date()
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }


  getWeather = async (e) => {  //with arrow fat no need to bind (autobinded)
    e.preventDefault(); //prevents the React from refreshing if we put an event with default
    //we need this line in order to check the properties of 'const data' 
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Chamsil,KR&APPID=76d042c17320259413cd6a9a2788caa5&units=metric`);//const API_KEY in the URL that will be fetched
    const data = await api_call.json(); //call api and convert it to json file
    console.log(data);//for debug
    this.setState({
      //check the console and find the properties needed
      temperature: data.main.temp,
      humidity: data.main.humidity,
      description: data.weather[0].description
    })
  }
  render(){
    return(
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className = "col-xs-7 title-container">
                  <Title date = {this.state.date.toLocaleTimeString()}/>
                </div>
                <div className = "col-xs-5 form-container">
                  <Form  getWeather = {this.getWeather}/>
                  <Weather 
                      temperature={this.state.temperature}
                      humidity= {this.state.humidity}
                      description = {this.state.description}
                      />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ); 
  }

}


        
        
export default App;
  /*
  getWeather = async (e) => {  //with arrow fat no need to bind (autobinded)
    e.preventDefault(); //prevents the React from refreshing if we put an event with default
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${API_KEY}`);//const API_KEY in the URL that will be fetched
    const data = await api_call.json(); //call api and convert it to json file
    console.log(data);//debug
  */