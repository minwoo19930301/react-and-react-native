import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import config from '../../config';


class Post extends Component{
    state={
        screenWidth:0,
        liked:false,
        likes:0
    }
    componentDidMount(){
        this.setState({
            screenWidth: Dimensions.get("window").width
        });
        
    }

    likePressed(){
        this.setState({
            liked: !this.state.liked,
            likes: (this.state.liked)? this.state.likes-1 :this.state.likes+1
        });
    }

    
    render(){
        console.log(this.state);
        const heartIconColor = (this.state.liked) ? "rgb(252,61,57)" : null
        const imageSelection = (this.props.item%2===0) ? "https://scontent-icn1-1.cdninstagram.com/vp/e7a5850bfee27c0542e93ec2f5efe7be/5DE4D64E/t51.2885-15/sh0.08/e35/s640x640/57751229_330018927706505_1583911259146970911_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com"
                        :"https://scontent-icn1-1.cdninstagram.com/vp/0521f49f42277fac6ede3158a70e13f9/5DEC38F8/t51.2885-15/sh0.08/e35/s640x640/65182218_1896065690494784_893585500009594920_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com"

        return(
            <View style={{flex:1, width: 100 +"%", height: 100 + "%"}}>
                <View style={styles.userBar}>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Image 
                        style={styles.userPic}
                        source={{uri: "https://scontent-icn1-1.cdninstagram.com/vp/6d7abd1ed16c1624448d6f9d32d60627/5DE8BD3D/t51.2885-15/sh0.08/e35/s640x640/57221562_314083462599565_3360776142819017876_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com"}} />
                        <Text style={{marginLeft:10}}>
                            kim_minwoo93
                        </Text>
                    </View>
                    <View style = {{alignItems:"center"}}/>
                        <Text style={{fontSize:25}}>...</Text>
                    </View>
                <TouchableOpacity onPress={()=>{this.likePressed()}}>
                <Image 
                style={{ width :this.state.screenWidth, height:this.state.screenWidth}}
                source={{uri:imageSelection}}/>
                </TouchableOpacity>
                <View style ={styles.iconBar}>
                <TouchableOpacity onPress={()=>{this.likePressed()}}>
                <Image style={[styles.icon, {height:40, width:40, tintColor:heartIconColor}]} source ={config.images.heartIcon}/>
                </TouchableOpacity>
                    
                    <Image style={[styles.icon, {height:33, width:33,marginTop: 5}]} source ={config.images.chatIcon}/>
                    <Image style={[styles.icon, {height:30, width:30,marginTop: 5}]} source ={config.images.planeIcon}/>
                </View>
                <View sytle = {styles.iconBar}>
                    <Text>
                        {this.state.likes} Likes
                    </Text>
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tempNav:{
        width:100+"%",
        height:50,
        marginTop:20,
        backgroundColor:"rgb(220,220,220)",
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

export default Post;