import React from "react";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import { useState, useEffect } from "react";

const ChatPage = ({ socket }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on("messageResponse", (data) =>
            setMessages([...messages, data])
        );
    }, [socket, messages]);
    return (
        // <div className="chat">
        //      <ChatBar socket={socket} />

        //     <div className="chat__main">
        //         <ChatBody messages={messages} />
        //         <ChatFooter socket={socket} />
        //     </div>
        // </div>


        <div>
            <div className="chat-flexbox">
  <div className="chat-box">
    <div className="chat-box-header">
      <h3>Messages<br /><small>Last active: 0 min ago</small></h3>
    </div>
    <div id="chat_box_body" className="chat-box-body">
      <div id="chat_messages">
        <div className="profile other-profile">
          <img src="https://images.unsplash.com/photo-1537396123722-b93d0acd8848?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=efc6e85c24d3cfdd15cd36cb8a2471ed" width="30" height="30" />
          <span>Other profile</span>
        </div>
        <div class="message other-message">
            I do offer delivery and pickup.
        </div>
        <div class="profile my-profile">
          <span>My profile</span>
          <img src="https://images.unsplash.com/photo-1534135954997-e58fbd6dbbfc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=02d536c38d9cfeb4f35f17fdfaa36619" width="30" height="30" />
        </div>
        <div class="message my-message">
          That's great
        </div>
        <div class="message my-message">
          I'd love to rent from the 21st through the 23rd.
        </div>
      </div>
    </div>
    <div id="typing">
      <div><span></span> <span></span> <span></span> <span class="n">Someone</span> is typing...</div>
    </div>
    <div class="chat-box-footer">
      <textarea id="chat_input" placeholder="Enter your message here..."></textarea>
      <button id="send">
        <svg style={{width: "24px", height: "24px"}} viewBox="0 0 24 24">
          <path fill="#006ae3" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
        </svg>
      </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ChatPage;
