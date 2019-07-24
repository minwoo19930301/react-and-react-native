import React, {Component} from 'react';
import {View,  StyleSheet} from 'react-native';
import {MainFeed, Login,Camera, Profile, Register} from './components/screens';
import { createSwitchNavigator, createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation'


const tabs = createBottomTabNavigator({
    feed: MainFeed,
    camera : Camera,
    profile: Profile
})


const MainStack = createSwitchNavigator({
    login : Login,
    main : tabs
}
);
const AppContainer = createAppContainer(MainStack);

class Insta extends Component{
   
    
    render(){
        return(
            <AppContainer/>
                    );
    }
}

export default Insta;


