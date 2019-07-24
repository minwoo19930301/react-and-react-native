import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class App extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'www.google.com' }}
        style={{ marginTop: 222 }}
      />
    );
  }
}

export default App