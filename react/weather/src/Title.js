import React from 'react';


class Title extends React.Component{
  render(){
    return(
      <div>
      <h1 className ="title-container__title ">Weather of "Seoul, Korea"</h1>
      <h5 className = "title-container__subtitle">{this.props.date}</h5>
      </div>
    )
  }

}

export default Title;
