
import React, { useState, useEffect } from 'react';
import BotCollection from './Botcollection';
import YourBotArmy from './Yourbotarmy';

// Base URL for fetching bot data
const BASEURL = "https://json-server-vercel-25iy.vercel.app/bots";

function App() {
  // State to hold the list of bots fetched from the API
  const [bots, setBots] = useState([]);
  // State to hold the list of bots in the user's army
  const [army, setArmy] = useState([]);

  // Function to fetch bot data from the API
  const fetchBots = () => {
    fetch(BASEURL)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to perform fetch request"); // Handle fetch errors
        return response.json(); 
      })
      .then((data) => {
        setBots(data); // Update state with the fetched bot data
      })
      .catch((error) => {
        console.error(error.message); // For any errors that occur during fetch
      });
  };

  // useEffect hook to fetch bot data when the component mounts
  useEffect(() => {
    fetchBots(); 
  }, []); // To ensure this runs only once when the component mounts

  return (
    <div className='Home'>
      <BotCollection bots={bots} setArmy={setArmy} army={army} />
      <YourBotArmy bots={army} setArmy={setArmy} army={army} />
    </div>
  );
}

export default App;
