//Handle the Bird
function handleBirds() {

  //Spawn a new Bird
  spawnBirds();
  //Kill the bird when it's offscreen
  killBirds();
}

//Spawn a new Bird
function spawnBirds() {

  if (birds.length < 2) {
    //Spawn a new Bird-Sprite
    new birds.Sprite(round(random(500, 1500)), round(random(30, 150)));
    //Give the new Bird a random Texture
    birds[birds.length - 1].ani = ["Robin", "Bluejay", "Sparrow"][round(random(0, 2))];
  }
}

//Kill the bird when it's offscreen
function killBirds() {

  if (!birds.length) return;

  //If a Bird is far off Screen, kill it
  for (const index in birds) if (abs(squirrel.x - birds[index].x) > 1000) birds[index].remove();
}

