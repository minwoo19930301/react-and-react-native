import React, {Component} from 'react';
import {View,  Text, TouchableOpacity, TextInput, Button} from 'react-native';

class Login extends Component{
    login(){
        this.props.navigation.navigate('main')
    }
    
    render(){
        return(
    
            <TouchableOpacity style = {{hegith:100+"%", width:100+"%", flex:1, justifyContent:"center", alignItems:"center"}}
            onPress={() =>{this.login()}}>
                <Text>
                    Login
                </Text>
            </TouchableOpacity>
                    );
    }
}

export default Login;


