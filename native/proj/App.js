import {createStackNavigator, createAppContainer} from 'react-navigation';
import React from 'react';


const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});

const App = createAppContainer(MainNavigator);

export default App;

