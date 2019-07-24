import React from 'react';
import ReactDOM from 'react-dom';
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {x: new Date()};
    }
    
    tick(){
      this.setState({x: new Date()});
    }

    render() {
      
      setInterval(()=>{
        this.tick();
      }, 1000)
      
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.x.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );
/*
class Profile extends React.Component {

    render() {
        return (
            <div>
                <img src="https://uploads.mixer.com/avatar/jf7qalfa-8499245.jpg" />
                <Name name={this.props.propsname.name} />
                <p>
                    age: {this.props.propsname.age}
                    <br />
                    bio: {this.props.propsname.bio}
                </p>
            </div>
        )
    }

}

const Name = props => <h4>{props.name}</h4>;

class Profiles extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            top_profiles: [
                { name: 'EM', age: 30, bio: 'is engineer man' },
                { name: 'Duckie', age: 25, bio: 'is a duck' },
                { name: 'Pizza', age: 20, bio: 'is an actual pizza' },
            ],
            other_profiles: [
                { name: 'Profile 1', age: 20, bio: 'is prof 1' },
                { name: 'Profile 2', age: 22, bio: 'is prof 2' },
                { name: 'Profile 3', age: 24, bio: 'is prof 3' },
                { name: 'Profile 4', age: 26, bio: 'is prof 4' },
                { name: 'Profile 5', age: 28, bio: 'is prof 5' },
            ]
        };
    }

    render() {
        return (
            <div>
                <h3>Top Profiles</h3>
                {this.state.top_profiles.map(param => <Profile propsname={param} />)}

                <h3>Other Profiles</h3>
                {this.state.other_profiles.map(param => <Profile propsname={param} />)}
            </div>
        )
    }
}


ReactDOM.render(<Profiles />, document.getElementById('root'));
*/