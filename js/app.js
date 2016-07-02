// Enemies our player must avoid
var Enemy = function(x,y) {
    // The image/sprite for our enemies, this uses
    // a helper provided to load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = Math.floor((Math.random() * 150) + 100);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    // If statement so the enemies reset when
    // they reach end of the canvas
    if (this.x > 500)
        this.x = -90;
    this.collision();
};

// a collision method is added where it checks
// if the player and the enemy collide then
// resets the player if they do
Enemy.prototype.collision = function() {
    if (player.x +50 > this.x &&
        player.x     < this.x + 65 &&
        player.y +60 > this.y &&
        player.y     < this.y + 70 ) {
        player.reset();
}
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// The Player Class includes a reset(), update(),
// render() handleInput(), and boundries() method.
var Player = function() {
    this.sprite = 'images/bernie.png';
    this.reset();
};

// A reset method for the player is added
Player.prototype.reset = function() {
    this.x = 202;
    this.y = 405;
};

Player.prototype.update = function(dt) {
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// A handleInput method is added using if-statements
// althought a switch statement is suitable as well
Player.prototype.handleInput = function(key){
    if (key === "down")
        this.y += 25;
    else if (key === "up")
        this.y -= 25;
    else if (key === "left")
        this.x -= 25;
    else if (key === "right")
        this.x += 25;
    this.boundries();
};

// Here we set the boundries for the Player
// and add an alert if the game is won
Player.prototype.boundries = function () {
    if (this.x < -23)
        this.x = -23;
    else if (this.x > 427)
        this.x = 427;
    else if (this.y > 428)
        this.y = 428;
    else if (this.y <= -9){
        alert("Well done!! You've won!");
        this.reset();
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [
new Enemy(0,60),
new Enemy(500,143),
new Enemy(400,225),
new Enemy(100,307)
];
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener("keyup", function(e) {
    var allowedKeys = {
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    };

    player.handleInput(allowedKeys[e.keyCode]);
});