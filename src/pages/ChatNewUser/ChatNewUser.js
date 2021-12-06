import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./ChatNewUser.css";
import ChatBox from '../ChatBox/ChatBox';
import { useLocation } from "react-router-dom";

function ChatNewUser(props) {

    const { newChatObj } = useLocation()
    const [chats, setChats] = useState([])
    const [userId, setUserId] = useState(props.userId)
    const [receiverChatBoxData, setReceiverChatBoxData] = useState([])
    const [showChatBox, setShowChatBox] = useState(false)
    const [chatHistoryExists, setChatHistoryExists] = useState(false)

    useEffect(() => {

        const chatUrl = 'http://35.230.33.4:8080/chats/userId/' + userId
        console.log('Calling Chat API 2 -> ' + chatUrl)

        axios.get(chatUrl).then(res => {
            console.log(res)
            if (res.status === 200) {
                console.log(res.data)
                setChats(res.data.data.chats)
            }
            else {
                console.log('API call failed')
            }
        });

    }, [])

    useEffect(() => {
        console.log(chats)
        console.log(newChatObj)
        
        chats.forEach(receiver => {
            if (receiver.receiverId === newChatObj.receiverId){
                console.log('chat history already exists')
                openChatBox(receiver)
                setChatHistoryExists(true)
            }
        })

        

    }, [chats])

    useEffect(() => {
        console.log('chatHistoryExists = '+chatHistoryExists)

        if (chatHistoryExists == false){
            let newChats = chats.concat(newChatObj)
            setChats(false)
            setChats(newChats)
        }

    }, [chatHistoryExists])

    function openChatBox(receiver) {

        // setReceiverChatBoxData(receiver)
        // setShowChatBox(!showChatBox)
        console.log('key =', receiver.receiverId)
        let x = receiver
        setReceiverChatBoxData(x)
        // if (!showChatBox){
        //     setShowChatBox(true)
        // }
        setShowChatBox(!showChatBox)
        setShowChatBox(!showChatBox)
    }

    return (
        <div>
            <div className="test">
                <div className="ac">

                    Chat List

                    {chats && chats.map(receiver => {

                        return (
                            // {/* // <div> */}
                            // {/* // <button key = {receiver.receiverId} onClick = {openChatBox(receiver)}>  // This line is an issue */}
                            // {/* // https://stackoverflow.com/questions/59304283/error-too-many-re-renders-react-limits-the-number-of-renders-to-prevent-an-in?rq=1 */}
                            <button className="chat-title-design btn btn-success" key={receiver.receiverId} onClick={() => openChatBox(receiver)}> {receiver.firstName} {receiver.lastName}</button>
                        )
                    })}

                </div>

                <div>
                    {showChatBox && <ChatBox receiverChatBoxData={receiverChatBoxData} userId={userId} />}
                    {/* {<ChatBox receiverChatBoxData={receiverChatBoxData} userId={userId} />} */}
                </div>
            </div>

        </div>
    )
}

export default ChatNewUser;