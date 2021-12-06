import React, { useState, useEffect } from 'react'
import "./ChatBox.css"; 
import { io } from 'socket.io-client'

let ip_address = '34.127.76.90';
let socket_port = '9000';
let socket = io(ip_address + ':' + socket_port);

function ChatBox(props) {

    const [newChatMessage,setNewChatMessage] = useState('')
    const [chatMessageList, setChatMessageList] = useState(props.receiverChatBoxData.chatMessages)

    socket.on('sendChatToReceiverFromSender', (receivedChatMsg, receiverId, senderId) => {
        console.log('inside sendChatToReceiverFromSender')
        console.log(receivedChatMsg, receiverId, senderId)
        if (props.userId == receiverId && props.receiverChatBoxData.receiverId == senderId){
            console.log('inside if')
            let numOfChats = chatMessageList.length
            console.log('numOfchats =', numOfChats)
            let lastChat = chatMessageList[numOfChats-1];
            console.log(lastChat)
            let previousId = lastChat.id
            // if (lastChat.id == undefined){
            //     previousId = 0
            // }
            // else{
            //     previousId = lastChat.id
            // }
            console.log('previousId =', previousId)
            let newDisplayChatObj = {
                id: previousId+1,
                senderId: senderId,
                receiverId: receiverId,
                message: receivedChatMsg
            }
            console.log(newDisplayChatObj)
            let newDisplayChatMsgArray = chatMessageList.concat(newDisplayChatObj);
            setChatMessageList(newDisplayChatMsgArray)

        }
        else{
            console.log('inside else')
        }
    })

    function sendChatMessageToReceiver(message, senderUserId, receiverUserId) {
        socket.emit('sendMsgFromSenderToReceiver', message, senderUserId, receiverUserId);
    }

    useEffect(() => {
        console.log(props.receiverChatBoxData)
        console.log(chatMessageList)
    })

    function readNewChatMessage(e) {
        setNewChatMessage(e.target.value)
    }

    function addNewChatToList(){
        
        let numOfChats = chatMessageList.length
        console.log('numOfchats =', numOfChats)
        let lastChat = chatMessageList[numOfChats-1];
        console.log(lastChat)
        let previousId = lastChat.id
        // if (lastChat.id == undefined){
        //     previousId = 0
        // }
        // else{
        //     previousId = lastChat.id
        // }
        console.log('previousId =', previousId)
        let newChatObj = {
            id: previousId+1,
            senderId: props.userId,
            receiverId: props.receiverChatBoxData.receiverId,
            message: newChatMessage
        }
        console.log(newChatObj)
        let newChatMsgArray = chatMessageList.concat(newChatObj);
        setChatMessageList(newChatMsgArray)
        sendChatMessageToReceiver(newChatObj.message, newChatObj.senderId, newChatObj.receiverId)
        setNewChatMessage('')
    }

    return (
        <div>
            <div>
                <div>
                    {props.receiverChatBoxData.firstName} {props.receiverChatBoxData.lastName}
                </div>
                <div>
                    {chatMessageList && chatMessageList.map(chat => {
                        return (
                            props.userId == chat.senderId ? (<div className = "chat-sender-position" key = {chat.id}>{chat.message}</div>) : 
                            (<div className = "chat-receiver-position" key = {chat.id}>{chat.message}</div>)
                        )
                    }

                    )}
                </div>
                
                <div>
                    <input onChange={readNewChatMessage} value={newChatMessage} type="text"></input>
                    <button className="btn btn-primary" onClick = {addNewChatToList}>Send</button>
                </div>
                
            </div>

        </div>
    )
}

export default ChatBox;