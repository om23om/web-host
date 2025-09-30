import React from 'react';

interface ResourcepanelProps {
  roomCode: string;
}

const Resourcepanel: React.FC<ResourcepanelProps> = ({ roomCode }) => {
  // Placeholder resources, in real app fetch from backend or supabase
  const resources = [
    { id: 1, title: 'Chapter 1 Notes', type: 'PDF', link: '#' },
    { id: 2, title: 'Formula Sheet', type: 'PDF', link: '#' },
    { id: 3, title: 'Study Video', type: 'Video', link: '#' },
  ];

  return (
    <div className="h-full p-4 overflow-y-auto">
      <h3 className="text-lg font-semibold mb-4">Resources</h3>
      <ul className="space-y-3">
        {resources.map((res) => (
          <li key={res.id} className="bg-gray-700 p-3 rounded hover:bg-gray-600">
            <a href={res.link} target="_blank" rel="noopener noreferrer" className="text-blue-400">
              {res.title} ({res.type})
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resourcepanel;
