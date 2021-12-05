import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Chat(props) {

    const [chats, setChats] = useState([])
    const [userId, setUserId] = useState(props.userId)

    useEffect(() => {

        const chatUrl = 'http://34.127.76.90:8080/chats/userId/'+userId
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

    return (
        <div>
            Chat Area
        </div>
    )
} 

export default Chat;