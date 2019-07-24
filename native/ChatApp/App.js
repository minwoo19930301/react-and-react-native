import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Home from './Home';
import Chat from './Chat';


class App extends React.Component{
 render(){
   return(
     <Router>
       <Scene key= 'root' style={{paddingTop:64}}>
         <Scene key='home' component={Home} title='Home'/>
         <Scene key='chat' component={Chat} title='Chat'/>
      </Scene>
       </Router>
   );
 }

}

export default App;
