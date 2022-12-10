
function handleAcorns() {

  //If there is no Acorn, generate one
  generateAcorns();

  //If the Acorn gets eaten, delete it
  deleteAcorn();
}

//If there is no Acorn, generate one
function generateAcorns() {

  //If there's an Acorn already, return
  if (acorn && !acorn.removed) return;

  //Generate Acorns at random Intervals
  if (random(0, 100) < 99) return;

  //Don't generate Acorns when eathing
  if (squirrel.eating || squirrel.digging) return;

  //New Acorn-Sprite
  acorn = new Sprite(((abs(ground[ground.length - 1].x) - abs(ground[0].x)) / 2) + round(random(-150, 150)), -10, 5);
  //Throw the Acorn in a random direction
  acorn.speed = (random(-3, 3));

  //Random Acorn Sprite-Graphics
  const randomAcornSprite = round(random(0, 2));

  if (randomAcornSprite === 0) {
    acorn.addImg('acorn1', '../Sprites/Acorns/Acorn1.png');
  } else if (randomAcornSprite === 1) {
    acorn.addImg('acorn2', '../Sprites/Acorns/Acorn2.png');
  } else if (randomAcornSprite === 2) {
    acorn.addImg('acorn3', '../Sprites/Acorns/Acorn3.png');
  }
}

//If the Acorn gets eaten, delete it
function deleteAcorn() {

  if (!acorn) return;

  if (squirrel.collides(acorn)) {
    acorn.remove();
    //Eat or burry the Acorn
    if (random() <= 0.8) {
      squirrel.eating = true;
      squirrel.digging = false;
    } else {
      squirrel.eating = false;
      squirrel.digging = true;
    }
    squirrel.running = false;
    squirrel.idle = false;
  }
}

