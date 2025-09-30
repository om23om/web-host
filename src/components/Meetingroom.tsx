import React, { useState } from 'react';
import Videocall from './videocall';
import Chatpanel from './chatpanel';
import Resourcepanel from './resourcepanel';

interface MeetingroomProps {
  roomCode: string;
  name: string;
  onLeave: () => void;
}

const Meetingroom: React.FC<MeetingroomProps> = ({ roomCode, name, onLeave }) => {
  const [showChat, setShowChat] = useState(false);
  const [showResources, setShowResources] = useState(false);

  return (
    <div className="h-screen flex flex-col bg-gray-900 text-white">
      <div className="flex justify-between items-center p-4 bg-gray-800">
        <h1 className="text-xl font-bold">Meeting: {roomCode}</h1>
        <div className="space-x-2">
          <button
            onClick={() => setShowChat(!showChat)}
            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
          >
            Chat
          </button>
          <button
            onClick={() => setShowResources(!showResources)}
            className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
          >
            Resources
          </button>
          <button
            onClick={onLeave}
            className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
          >
            Leave
          </button>
        </div>
      </div>
      <div className="flex flex-1">
        <div className="flex-1">
          <Videocall roomCode={roomCode} name={name} />
        </div>
        {showChat && (
          <div className="w-80 bg-gray-800 border-l border-gray-700">
            <Chatpanel roomCode={roomCode} name={name} />
          </div>
        )}
        {showResources && (
          <div className="w-80 bg-gray-800 border-l border-gray-700">
            <Resourcepanel roomCode={roomCode} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Meetingroom;
