//  installing dependencies and chat-engine
import { ChatEngine } from "react-chat-engine";

import  ChatFeed  from './components/ChatFeed';

import './App.css';



const App = () => {
    return (
        <ChatEngine
            height = "100vh"
            projectID= "4b6cc744-03fa-452b-9360-05ad00e9773b"
            userName="zukar09"
            userSecret="2789"
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps} />}
        />

    );
}

export default App;