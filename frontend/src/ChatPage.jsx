import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatPage=(props)=>{
    const chatProps= useMultiChatLogic('3b5bc2e4-c001-4383-97ef-e58055a6b98b',props.user.username,props.user.secret)
    return <div style={{height: '100vh'}}>
        <MultiChatSocket {... chatProps}/>
        <MultiChatWindow {... chatProps} style={{height: '100%'}}/>
    </div>
}

export default ChatPage