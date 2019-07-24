import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import config from '../../config';
import { PostFeed } from '../container';


class Insta extends Component{
   
    
    render(){
        return(
            <View style={{flex:1, width: 100 +"%", height: 100 + "%"}}>
                <View style={styles.tempNav}> 
                  <Text style={{fontSize:22.5}}>Jjapstagram</Text>
                  <PostFeed/>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tempNav:{
        width:100+"%",
        height:200+"%",
        backgroundColor:"rgb(250,250,250)",
        borderBottomColor:"rgb(0,0,0)",
        borderBottomWidth:StyleSheet.hairlineWidth,
        justifyContent: "center",
        alignItems:"center",
        
    },
    userBar : {
        width:100+'%',
        height:config.stylesConstants.rowHeight,
        backgroundColor:"rgb(255,255,255)",
        flexDirection:"row",
        paddingHorizontal:10,
        justifyContent:"center",
        justifyContent:"space-between"
    },
    userPic:{
        height:40,
        width:40,
        borderRadius:20
    },
    iconBar:{
        height:config.stylesConstants.rowHeight,
        width:100+"%",
        flexDirection:"row",
        borderColor:"rgb(0,0,0)",
        borderTopWidth:StyleSheet.hairlineWidth,
        borderBottomWidth:StyleSheet.hairlineWidth,
    },
    icon:{
       marginLeft:10
    },
    commentBar:{
        width:100 +"%",
        height: config.stylesConstants.rowHeight,
        borderColor:"rgb(0,0,0)",
        borderTopWidth:StyleSheet.hairlineWidth,
        borderBottomWidth:StyleSheet.hairlineWidth,
        marginLeft: 5
    }


})

export default Insta;


