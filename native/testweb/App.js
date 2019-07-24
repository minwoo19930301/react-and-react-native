

import React, {Component} from 'react';
import MyWebView from 'react-native-webview-autoheight';
class App extends Component{
  render(){
    return(
      <MyWebView source={{uri: 'http://youtube.com'}} startInLoadingState={true}/>
    );
  }
}

export default App;
