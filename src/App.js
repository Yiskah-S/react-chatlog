import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';

const App = () => {
	const firstMessage = chatMessages[0];

	return (
		<div id="App">
			<header>
				<h1>React Chat Log</h1>
			</header>
			<main>
				<ChatEntry
					sender={firstMessage.sender}
					body={firstMessage.body}
					timeStamp={firstMessage.timeStamp}
				/>
			</main>
		</div>
	);
};

export default App;
