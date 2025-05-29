// All my dom vars on top 
const godsContainer = document.querySelector("#gods-container");
const startBtn = document.querySelector("#start-btn");
const startScreen = document.querySelector("#start-screen");
const gameIntro = document.querySelector("#game-intro");
const muteBtn = document.querySelector("#mute-btn");
// music setup only for the background 
const bgMusic = new Audio("./audio/bg-music.mp3");
bgMusic.loop   = true;
bgMusic.volume = 0.1;

const gods = [
  {
    name: "Zeus",
    health: 210,
    attackPower: 24,
    special: "Lightning Strike",
    image: "./images/zeusStanding.png",
    background: "./images/bgzeus.png"
  },
  {
    name: "Ares",
    health: 200,
    attackPower: 20,
    special: "Rage Slash",
    image: "./images/aresStanding.png",
    background: "./images/bgAres.png"   
  },
  {
    name: "Poseidon",
    health: 230,
    attackPower: 18,
    special: "Tidal Wave",
    image: "./images/poseidonStanding.png",
    background: "./images/bgPoseidon.png"
  },
  {
    name: "Athena",
    health: 200,
    attackPower: 22,
    special: "Shield slam",
    image: "./images/athenaStanding.png",
    background: "./images/bgAthena.png"
  }
];

 function cards () {
  gods.forEach((god) => {
    // Create card for each god
    const card = document.createElement("div");
    card.className = "god-card";
    card.innerHTML = `
      <h3>${god.name}</h3>
      <p>Health: ${god.health}</p>
      <p>Attack: ${god.attackPower}</p>
      <p>Special: ${god.special}</p>
      <button>Select</button>
    `;
    // Event listener to select button
    card.querySelector("button").addEventListener("click", () => {
      startGame(god);
    });
    godsContainer.appendChild(card);
  });

  // Function to choose a random enemy 
  window.getRandomEnemy = function (excludeName) {
    const enemies = [];
    for (let i = 0; i < gods.length; i++) {
      if (gods[i].name !== excludeName) {
        enemies.push(gods[i]);
      }
    }
    const randomIndex = Math.floor(Math.random() * enemies.length);
    return enemies[randomIndex];
  };
  
  function toggleMusic() {
  if (bgMusic.muted) {
    bgMusic.muted = false;
    muteBtn.textContent = "🔊 Music";
  } else {
    bgMusic.muted = true;
    muteBtn.textContent = "🔇 Music";
  }
}
muteBtn.addEventListener("click", toggleMusic);
document.querySelector("#start-btn").addEventListener("click", () => {
  bgMusic.play()
  });
;
  // Event listener to go from start screen to selection screen
  startBtn.addEventListener("click", () => {
    startScreen.style.display = "none";
    gameIntro.style.display = "block";
  });
};
cards() 