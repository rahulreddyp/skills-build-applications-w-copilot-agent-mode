import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://congenial-yodel-9q9xxg4g4r9h97rw-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div>
      <h1 className="text-center">Teams</h1>
      <ul className="list-group">
        {teams.map(team => (
          <li key={team._id} className="list-group-item">{team.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Teams;
