
window.onload = function () {
  const gods = [
    {
      name: "Zeus",
      health: 100,
      attack: 15,
      special: "Lightning Strike"
    },
    {
      name: "Ares",
      health: 120,
      attack: 20,
      special: "Rage Slash"
    },
    {
      name: "Poseidon",
      health: 110,
      attack: 18,
      special: "Tidal Wave"
    },
    {
      name: "Hades",
      health: 90,
      attack: 25,
      special: "Soul Drain"
    }
  ];

  const godsContainer = document.querySelector("#gods-container");
//   const godSelection = document.querySelector("#god-selection");

  gods.forEach(god => {
    const card = document.createElement("div");
    card.className = "god-card";
    card.innerHTML = `
      <h3>${god.name}</h3>
      <p>Health: ${god.health}</p>
      <p>Attack: ${god.attack}</p>
      <p>Special: ${god.special}</p>
      <button>Select</button>
    `;
    card.querySelector("button").addEventListener("click", () => {
      window.startGame(god); 
    });
    godsContainer.appendChild(card);
  });

 
};