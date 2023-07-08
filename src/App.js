import './App.css';
import { useEffect, useState } from 'react';
import { Shows } from './Shows';

function App() {
  const [shows, setShows] = useState([]);
  
  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
    .then((res) => res.json())
    .then((json) => setShows(json));
  }, []);

  return (
    <div className="App">
      {shows.map((show) => (
        <div>
          <Shows movieName = {show.name} />
      ))}
    </div>
  );
}

export default App;
