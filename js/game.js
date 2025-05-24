class Game {
  constructor(playerData) {
    this.player = new Player(
      playerData.name,
      playerData.health,
      playerData.attackPower,
      playerData.special
    );
    const enemyData = getRandomEnemy(playerData.name);
    this.enemy = new Player(
      enemyData.name,
      enemyData.health,
      enemyData.attackPower,
      enemyData.special
    );

    // elements 
    this.playerHealthBar = document.querySelector("#player-health");
    this.enemyHealthBar = document.querySelector("#enemy-health");
    this.battleLog = document.querySelector("#battle-log");
    this.endMessage = document.querySelector("#end-message");
    this.endScreen = document.querySelector("#end-screen");
    this.arena = document.querySelector("#arena");
    this.playerGodDiv = document.querySelector("#player-god");
    this.enemyGodDiv = document.querySelector("#enemy-god");

    // Set sprite
    document.querySelector("#player-sprite").style.backgroundImage = `url('${playerData.image}')`; //sprite works
    document.querySelector("#enemy-sprite").style.backgroundImage = `url('${enemyData.image}')`; //sprite works 

    //set names on UI for the gods 

document.querySelector("#player-name").textContent = this.player.name
    document.querySelector("#enemy-name").textContent = this.enemy.name

    // set background for each god
   // hide selection screen and remove its background overlp
document.querySelector("#game-intro").style.display = "none";
document.querySelector("#game-intro").style.backgroundImage = "none";
document.querySelector("#gods-container").style.backgroundImage = "none";

// Set the arena background
document.body.style.backgroundImage = `url('${playerData.background}')`;


    this.arena.style.display = "block"; // keep like that to get backgrounds into arena

    document.querySelector("#god-selection").style.display = "none"; //cards before enter arena

    this.updateHealthBars();
  }

  updateHealthBars() {
    this.playerHealthBar.style.width = `${
      (this.player.health / this.player.maxHealth) * 100
    }%`;
    this.enemyHealthBar.style.width = `${
      (this.enemy.health / this.enemy.maxHealth) * 100
    }%`;
  }

  logAction(message) {
    const p = document.createElement("p");
    p.textContent = message;
    this.battleLog.appendChild(p); 
    this.battleLog.scrollTop = this.battleLog.scrollHeight; // fixed to show on the bottom 
  } 


  endGame(result) {
    if (result === "win") {
      this.endMessage.textContent = "You win!";
    } else {
      this.endMessage.textContent = "You lose!";
    }
    this.endScreen.style.display = "block";
    this.arena.style.display = "none";
  }

  playerAttack() {
    this.logAction(this.player.normalAttack(this.enemy));
    this.updateHealthBars();
    if (this.enemy.health <= 0)
       return this.endGame("win");
    setTimeout(() => this.enemyAttack(), 1000); // keep it 1 sec for now
  }

  playerSpecial() {
    this.logAction(this.player.specialAttack(this.enemy));
    this.updateHealthBars();
    if (this.enemy.health <= 0)
       return this.endGame("win");
    setTimeout(() => this.enemyAttack(), 1000);
  }

  playerHeal() {
    this.logAction(this.player.heal());
    this.updateHealthBars();
    setTimeout(() => this.enemyAttack(), 1000);
  }

  enemyAttack() {
    this.logAction(this.enemy.normalAttack(this.player));
    this.updateHealthBars();
    if (this.player.health <= 0) this.endGame("lose");
  }
}


let OurGame;

//Buttons for player Behavior

  const attackBtn = document.querySelector("#attack-btn");
  const specialBtn = document.querySelector("#special-btn");
  const healBtn = document.querySelector("#heal-btn");
  const restartBtn = document.querySelector("#restart-btn");

//Event listeners for the buttons

  attackBtn.addEventListener("click", () => OurGame.playerAttack());
  specialBtn.addEventListener("click", () => OurGame.playerSpecial());
  healBtn.addEventListener("click", () => OurGame.playerHeal());
  restartBtn.addEventListener("click", () => location.reload());

 function startGame(godData) {
  // window.startGame = startGame; // for global access seems like is working fine now..Do not touch
   console.log("starting the game");
  OurGame = new Game(godData);
}
