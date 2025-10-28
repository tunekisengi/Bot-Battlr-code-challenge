import SingleBot from "./SingleBot";
import { useState } from "react";

function YourBotArmy({ bots, setArmy, army }) {
  // State for whether bots in the army can be removed
  const [canBeRemoved, setCanBeRemoved] = useState(true);

  return (
    <div>
      <h1>Your Bot Army</h1>
      {/* Map over army*/}
      {army.map((item, index) => (
        <SingleBot
          data={item} 
          key={item.id}
          setArmy={setArmy} 
          canBeRemoved={canBeRemoved} 
          index={index} 
          army={army} 
        />
      ))}
    </div>
  );
}

export default YourBotArmy;