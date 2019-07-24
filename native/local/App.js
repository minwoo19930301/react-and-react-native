import React, {Component} from 'react';
import PushNotification from 'react-native-push-notification'
import {Text, TouchableOpacity} from 'react-native';

class App extends Component{
    notify(){
      PushNotification.localNotificationSchedule({
        message: "notified", // (required)
        date: new Date(Date.now() + (0 * 1000)) // in 10secs
      });
    }
    
    render(){
        return(
    
            <TouchableOpacity style = {{hegith:100+"%", width:100+"%", flex:1, justifyContent:"center", alignItems:"center"}}
            onPress={() =>{this.notify()}}>
                <Text>
                    Notify
                </Text>
            </TouchableOpacity>
                    );
    }
}

export default App;
