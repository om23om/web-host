import React, { useState, useEffect } from 'react';

interface ChatpanelProps {
  roomCode: string;
  name: string;
}

interface Message {
  id: string;
  name: string;
  text: string;
  timestamp: Date;
}

const Chatpanel: React.FC<ChatpanelProps> = ({ roomCode, name }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        name,
        text: newMessage,
        timestamp: new Date(),
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h3 className="text-lg font-semibold">Chat</h3>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg) => (
          <div key={msg.id} className="bg-gray-700 p-2 rounded">
            <div className="text-sm font-semibold">{msg.name}</div>
            <div className="text-sm">{msg.text}</div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-700">
        <div className="flex">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type a message..."
            className="flex-1 p-2 bg-gray-600 text-white rounded-l"
          />
          <button
            onClick={sendMessage}
            className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatpanel;
