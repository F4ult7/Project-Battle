// All my dom vars on top 
const godsContainer = document.querySelector("#gods-container");
const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const gameIntro = document.getElementById("game-intro");

const gods = [
  {
    name: "Zeus",
    health: 110,
    attackPower: 24,
    special: "Lightning Strike",
    image: "./images/zeusStanding.png",
    specialImage: "./images/zeusSpecial.png",
    deathImage: "./images/zeusDeath.png",
    background: "./images/bgzeus.png"
  },
  {
    name: "Ares",
    health: 100,
    attackPower: 20,
    special: "Rage Slash",
    image: "./images/aresStanding.png",
    specialImage: "./images/aresSpecial.png",
    deathImage: "./images/aresDeath.png",
    background: "./images/bgAres.png"
  },
  {
    name: "Poseidon",
    health: 130,
    attackPower: 18,
    special: "Tidal Wave",
    image: "./images/poseidonStanding.png",
    specialImage: "./images/poseidonSpecial.png",
    deathImage: "./images/poseidonDeath.png",
    background: "./images/bgPoseidon.png"
  },
  {
    name: "Hades",
    health: 100,
    attackPower: 22,
    special: "Soul Drain",
    image: "./images/hadesStanding.png",
    specialImage: "./images/hadesSpecial.png",
    deathImage: "./images/hadesDeath.png",
    background: "./images/bgHades.png"
  }
];

// When the window loads, display god cards
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
  

  // Event listener to go from start screen to selection screen
  startBtn.addEventListener("click", () => {
    startScreen.style.display = "none";
    gameIntro.style.display = "block";
  });
};

cards() // i dont like this here ** fix later 