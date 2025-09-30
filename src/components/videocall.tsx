import React, { useRef, useEffect, useState } from 'react';

interface VideocallProps {
  roomCode: string;
  name: string;
}

const Videocall: React.FC<VideocallProps> = ({ roomCode, name }) => {
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);

  useEffect(() => {
    // Initialize video call
    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing media devices:', error);
      }
    };

    startVideo();
  }, []);

  const toggleVideo = () => {
    setIsVideoOn(!isVideoOn);
    // Implement video toggle logic
  };

  const toggleAudio = () => {
    setIsAudioOn(!isAudioOn);
    // Implement audio toggle logic
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 grid grid-cols-2 gap-4 p-4">
        <div className="bg-gray-700 rounded-lg overflow-hidden">
          <video ref={localVideoRef} autoPlay muted className="w-full h-full object-cover" />
          <div className="p-2 bg-black bg-opacity-50 text-white">{name} (You)</div>
        </div>
        <div className="bg-gray-700 rounded-lg overflow-hidden">
          <video ref={remoteVideoRef} autoPlay className="w-full h-full object-cover" />
          <div className="p-2 bg-black bg-opacity-50 text-white">Remote Participant</div>
        </div>
      </div>
      <div className="flex justify-center space-x-4 p-4 bg-gray-800">
        <button
          onClick={toggleVideo}
          className={`px-4 py-2 rounded ${isVideoOn ? 'bg-green-600' : 'bg-red-600'} text-white`}
        >
          {isVideoOn ? 'Video On' : 'Video Off'}
        </button>
        <button
          onClick={toggleAudio}
          className={`px-4 py-2 rounded ${isAudioOn ? 'bg-green-600' : 'bg-red-600'} text-white`}
        >
          {isAudioOn ? 'Audio On' : 'Audio Off'}
        </button>
      </div>
    </div>
  );
};

export default Videocall;
