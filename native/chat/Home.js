import React from 'react';
import {View,Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Home extends React.Component{
    state = {
        name_:''
    };
 render(){
   return(
     <View>
        <Text style = {styles.title}>
          Enter your name :
        </Text>
        <TextInput style = {styles.nameInput}
                            placeholder='Name'
                            onChangeText={(text)=>{this.setState({name_:text});}}
        />
        <TouchableOpacity
        onPress={() => {
            Actions.chat({
                name_: this.state.name_
            })
        }}>
            <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
     </View>
   );
 }

}

var styles = StyleSheet.create({
    title: {
        marginTop: 20,
        marginLeft:20,
        fontSize:20,
    },
    nameInput:{
        height:40,
        borderWidth:2,
        borderColor:'black',
        margin: 20,
    },
     buttonText:{
        marginLeft:20,
        fontSize:20
     }

})

export default Home;
