import { useState } from "react";

function SingleBot({ data, setArmy, army, canBeRemoved, index }) {
  // State to manage whether the bot has been clicked 
  const [isClicked, setIsClicked] = useState(false);

  // Function to add the bot to the army
  function addToArmy(newData) {
    setArmy((prevData) => [...prevData, newData]); // Add new bot to army
    setIsClicked(true); // Set clicked state to true
  }

  // Function to remove the bot from the army
  function removeFromArmy(index) {
    // Filter out the bot at the given index
    const updatedArmy = army.filter((_, i) => i !== index);
    setArmy(updatedArmy); // Update the army state
  }

  return (
    <div>
      {/* To show the bot's avatar */}
      <img src={data.avatar_url} alt={data.name} />
      <h2>{data.name}</h2>
      <p>Health: {data.health}</p>
      <p>Damage: {data.damage}</p>
      <p>Armor: {data.armor}</p>
      <p>Class: {data.bot_class}</p>
      <p>Catchphrase: {data.catchphrase}</p>

      {/*To render buttons based on the bot's status */}
      {canBeRemoved ? (
        <button onClick={() => removeFromArmy(index)}>REMOVE</button>
      ) : isClicked ? (
        ""
      ) : (
        <button onClick={() => addToArmy(data)}>ENLIST</button>
      )}
    </div>
  );
}

export default SingleBot;