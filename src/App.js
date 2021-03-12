import React from 'react';
import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
function App(){
	return (
		<div>
		<ChatEngine
			height='100vh'
			userName='hritik99'
			userSecret='12345'
			projectID='23710331-c1be-43b2-86ba-3a44198726ea' 
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps }/>}
        />
		</div>
	);
}
export default App;