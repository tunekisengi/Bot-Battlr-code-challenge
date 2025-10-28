  <!-- BOT BATLLR -->


<!-- Features -->
The app fetches a list of bots from a local server and displays them in the Bot Collection. Users can add bots to their army by clicking the "ENLIST" button, which updates the state and adds the bot to their army. If the bot is already in the army, it can be removed by clicking the "REMOVE" button. The buttons are styled to changing color when hovered over to enhance user experience.

<!-- Components -->
App.js is the main component that manages the state of the application. The fetchBots function is used to retrieve bot data from the local server when the component mounts, to ensure the data is up-to-date.

BotCollection.js displays all available bots fetched from the server. It allows users to enlist bots by adding them to their army. 

SingleBot.js is responsible for rendering the details of a single bot, including its avatar, health, damage, armor, class, and catchphrase. There is the "ENLIST" and "REMOVE" buttons, for whether the bot can be removed or has been clicked. This component receives the bot's data.

YourBotArmy.js shows the list of bots currently enlisted in the user’s army. It allows users to remove bots from the army if needed. This component receives the army list, the setArmy function, and the current state of the army as props.

<!-- Styling -->
The app’s styling is defined in the index.css file.Styled the main container using flexbox layout for a responsive design, with padding and background color for appealing layout. The buttons are styled with colors, borders, and transition effects to improve user interaction.
Author by James Kisengi