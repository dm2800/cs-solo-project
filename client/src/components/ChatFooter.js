import { useEffect, useState } from "react";
import axios from "axios";

const ChatFooter = ({socket}) => {
    const [message, setMessage] = useState("");

    const [loggedInUser, setLoggedInUser] = useState({});

    //Getting logged in user
    useEffect(() => {
        axios
            .get("http://localhost:3000/api/users", { withCredentials: true })
            .then((res) => {
                console.log("user res", res);
                console.log("user res data", res.data);
                setLoggedInUser(res.data);
            })
            .catch((err) => {
                console.log("get users error", err);
                setLoggedInUser(false);
            });
    }, []);

    const handleSendMessage = (e) => {
        e.preventDefault();
        console.log({ userName: loggedInUser.username, message });
        if (message.trim() && loggedInUser) {
            socket.emit('message', {
              text: message,
              name: loggedInUser.username,
              id: `${socket.id}${Math.random()}`,
              socketID: socket.id,
            });
          }
        setMessage("");
    };
    return (
        <div className="chat__footer">
            <form className="form" onSubmit={handleSendMessage}>
                <input
                    type="text"
                    placeholder="Write message"
                    className="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button className="sendBtn">SEND</button>
            </form>
        </div>
    );
};

export default ChatFooter;
