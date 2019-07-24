import React from 'react';
import {GiftedChat} from 'react-native-gifted-chat';

class Chat extends React.Component{
    state={
        messages:[]
    }
 render(){
   return(
     <GiftedChat
        messages={this.state.messages}
        onSend={(message)=>{
             Backend.sendMessage(message);
        }}
        user={{
            _id:Backend.getUid(),
            name:this.props.name,
        }}
     
     />
   );
 }

}

Chat.defaultProps = {
    name_ : 'err'
};

export default Chat;
