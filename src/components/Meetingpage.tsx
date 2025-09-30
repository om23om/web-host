import React, { useState } from 'react';
import Meetingroom from './Meetingroom';

const Meetingpage: React.FC = () => {
  const [meetingId, setMeetingId] = useState('');
  const [name, setName] = useState('');
  const [inMeeting, setInMeeting] = useState(false);

  const createMeeting = () => {
    const id = Math.random().toString(36).substring(7);
    setMeetingId(id);
    setInMeeting(true);
  };

  const joinMeeting = () => {
    if (meetingId && name) {
      setInMeeting(true);
    }
  };

  if (inMeeting) {
    return <Meetingroom roomCode={meetingId} name={name} onLeave={() => setInMeeting(false)} />;
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Live Meetings</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Meeting Code</label>
          <input
            type="text"
            value={meetingId}
            onChange={(e) => setMeetingId(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter meeting code"
          />
        </div>
        <div className="flex space-x-4">
          <button
            onClick={createMeeting}
            className="flex-1 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Create Meeting
          </button>
          <button
            onClick={joinMeeting}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Join Meeting
          </button>
        </div>
      </div>
    </div>
  );
};

export default Meetingpage;
