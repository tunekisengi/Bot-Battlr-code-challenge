import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

const BASEURL = "https://json-server-vercel-25iy.vercel.app/bots";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch(BASEURL)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to perform fetch request");
        return response.json();
      })
      .then((data) => setBots(data))
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <div className="Home">
      <BotCollection bots={bots} setArmy={setArmy} army={army} />
      <YourBotArmy setArmy={setArmy} army={army} />
    </div>
  );
}

export default App;
