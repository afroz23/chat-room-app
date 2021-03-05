import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
function App(){
	return (
		<ChatEngine
			height='100vh'
			userName='afroz23'
			userSecret='12345'
			projectID='23710331-c1be-43b2-86ba-3a44198726ea'
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps }/>}
        />
	);
}
export default App;