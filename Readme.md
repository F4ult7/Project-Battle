*********** To do list *********

- script.gods array of obj etc 
- Player JS for the behavior of the player attack / heal / 
- game for the behavior of the page refresh / restart / screens
- OPTIONAL COOLDOWNS
- OPTIONAL More function to make the game more challenging and attractive 
- Add sprites to achieve frame movement 
- Add sounds 
- Somehow scoreboard or exp?
- Need to find a way to make the enemy random attacks special heal 
- Add more gods that will be unlocked base on exp of player once it reach a certain level it will unlock then next one 

*********** HTML STRUCTURE ***********

- Intro & god choice containers
- Battle screen 
- Player Information
- Enemy Information
- buttons
- Refactor
- polishing

*********** JS FUNCTIONS ***********


- Add Heal function
- Add cooldown for special abilites
- Add Healhbar UI instead of just numbers **(quiz lab can be the same ,check)**
- Refactor
- polishing


***********   CSS STYLING   ***********
- image and animations for attacks
- Themes for gods 
- backgrounds


**************************************What i did so far************************************** 

1. HTML Structure
- Created html #start-screen, #game-intro, #arena, and #end-screen. (15-05-25)
- Added interactive elements like god cards, action buttons (Attack, Special, Heal), and a battle log(15-05-25)

2. CSS Styling

- Base Css (15-05-25)
- Fixed themed screens and backgrounds for each god. (23-05-25)
- Styled a little bit the god cards, buttons, and health bars.(16-05-25)
- Fully target each element in Css and adjusting accordingly (22-05-25)
- Added Extra styling sprites still without frames (23-05-25)
- Fix small issues with the backgrounds and the sprites (24-05-25)

3. Game Setup Logic (script.js)

- Created an array of god objects, each with unique stats and image paths. (15-05-25)
- Dynamically generated god cards on the selection screen. (20-05-25)
- Fixed my loop that had some issues (19-05-25)
- Attached event listeners to each card’s Select button. (20-05-25)
- Passed the selected god to the game logic when a selection is made. (20-05-25)

4. Player Class (player.js)

- Implemented a Player class to manage each god's health, attacks, specials, and healing. (18-05-25)
- Fixed my Player class to working functionality (19-05-25)
- Fixed the maxHealth problem with the bars (22-05-25)
- Added random number to attacks / special for unpredictable moves (24-05-25)

5. Game Class (game.js)

- Created a Game class to manage all gameplay logic and UI updates. (22-05-25)
- Fixed all required DOM elements (22-05-25)
- fixed turn logic, player/enemy actions, health bar updates, and end game logic. (23-05-25)
- fixed the logS method to keep always the last interaction visible (24-05-25)

6. Event Handling

- fixed setTimeout to delay enemy turns after player actions. (19-05-25) 
- Refined some parts of the code. (23-05-25)

7. Improving Structure

- Refine html (23-05-25)
- keep file separation (script.js for UI setup, game.js for game logic). (23-05-25)


**************************************Helpfull Resources***************************************

**********Sprites**********

https://craftpix.net
https://opengameart.org/
https://www.spriters-resource.com/
https://kenney.nl/assets
https://itch.io/search?q=greek+gods+sprites
https://www.pixilart.com/
https://www.deviantart.com
https://www.photopea.com/

**********Ideas And guidance**********

https://www.youtube.com/watch?v=mBt3UuLJx9Y
https://www.youtube.com/watch?v=cHq31ocqREU
https://www.youtube.com/watch?v=GnNaK4QD4Ew
https://www.youtube.com/watch?v=xfCPZhMw5Z0


*************Tips that i learned the hard way for my 1st project**************

~ Form what you want to achieve in your head pass it on a paper/note and then start coding.
~ Do not touch the code when you feel tired it will break.
~ Do not rush the code take your time or ..it will break. 
~ Do not code if your head is going crazy it will break. 
~ it will break thats for sure , atleast for now,when you feel like ready to punch the walls take a step back go to sleep and reset . 
~ ALWAYS and i mean ALWAYS keep a backup file with your working project in case you break it.
~ Achievement unlocked "it will break" (35 times)
