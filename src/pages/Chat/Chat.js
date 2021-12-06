import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Chat.css";
import ChatBox from '../ChatBox/ChatBox';

function Chat(props) {

    const [chats, setChats] = useState([])
    const [userId, setUserId] = useState(props.userId)
    const [receiverChatBoxData, setReceiverChatBoxData] = useState([])
    const [showChatBox, setShowChatBox] = useState(false)

    useEffect(() => {

        const chatUrl = 'http://34.127.76.90:8080/chats/userId/' + userId
        console.log('Calling Chat API -> ' + chatUrl)

        axios.get(chatUrl).then(res => {
            console.log(res)
            if (res.status === 200) {
                console.log(res.data)
                setChats(res.data.data.chats)
            }
            else {
                console.log('API call failed')
            }
        })

    }, [])

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
            <div className="row">
                <div className="col-lg-4 ac">

                    Chat List

                    {chats && chats.map(receiver => {

                        return (
                            // {/* // <div> */}
                            // {/* // <button key = {receiver.receiverId} onClick = {openChatBox(receiver)}>  // This line is an issue */}
                            // {/* // https://stackoverflow.com/questions/59304283/error-too-many-re-renders-react-limits-the-number-of-renders-to-prevent-an-in?rq=1 */}
                            <button className="chat-title-design" key={receiver.receiverId} onClick={() => openChatBox(receiver)}> {receiver.firstName} {receiver.lastName}</button>
                        )
                    })}

                </div>

                <div className="col-lg-4 bc">
                    {showChatBox && <ChatBox receiverChatBoxData={receiverChatBoxData} userId={userId} />}
                    {/* {<ChatBox receiverChatBoxData={receiverChatBoxData} userId={userId} />} */}
                </div>
            </div>

        </div>
    )
}

export default Chat;