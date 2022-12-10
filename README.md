# 🐿️Squirrel🐿️
A Pixel-Art Squirrel 🐿️ that lives in the Forest 🌳 and searches for Acorns 🌰. Written in P5JS using P5.Play

![Squirrel](https://raw.githubusercontent.com/johnnyawesome/Squirrel/main/Squirrel/DemoImages/Squirrel.gif)

## Copyright & Attribuition

**Squirrel**: [Elthen](https://elthen.itch.io/2d-pixel-art-squirrel-sprites?download) / [Elthen on Patreon](https://www.patreon.com/posts/27430241) License: [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) / 
**Forest-Assets**: [Ansimuz](https://ansimuz.itch.io/sunnyland-tall-forest) [License](https://ansimuz.itch.io/sunnyland-tall-forest)
**Acorn**: [Ansimuz](https://ansimuz.itch.io/sunnyland-woods) [License](https://ansimuz.itch.io/sunnyland-woods)
**Birds**: ["[LPC] Birds" by bluecarrot16, commissioned by castelonia.](https://opengameart.org/content/lpc-birds) Licenses: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) & [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) & [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) & [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)

## About the Project

The Code is written in [P5JS](https://p5js.org/). It makes use of the [P5.Play-Library](https://p5play.org/).
The [P5.Play-Library](https://p5play.org/) opens up some cool possibilities, because it gives us an easy way to use the [Planck Physics Engine](https://piqnt.com/planck.js/)! This is the Physics Engine used by other popular games, like Angry Birds!

## Initialization

- Generate the Background out of 3 different Forest-Tiles
- Generate the Ground out of Earth-Tiles
- Generate Moss out of 2 different Moss-Tiles
- Generate Plants
- Generate the Squirrel
- Generate Birds 🐦 out of 3 different Bird-Sprites
 
## 🐿️The Squirrel🐿️

- When there are no Acorns, the Squirrel idles
- After some time, the regular Idle-Animation switches to a second Idle-Animation for a short while, and the Squirrel starts looking around
- If a Acorn drops from a Tree 🌳, the Squirrel will jump up!
- When the Acorn lies still, the Squirrel will run to it
- At the Acorn, there's an 80% Chance the Squirrel will eat it, and a 20 % Chance the Squirrel will bury it

## 🌰The Acorn🌰

- Yes, that Emoji is not an Acorn 🙄
- The Acorn is where the [Planck Physics Engine](https://piqnt.com/planck.js/) comes into play!
- When generating the Acorn, several things happen:
- A random Sprite is picked, out of 3 different Acorn-Sprites
- A random Speed is given to the Acorn. It doesn't just drop on the floor in a straight line, it has a direction when it falls
- The Acorn will collide with the floor, and bounce off of it
- On the Ground, the Acorn will roll around a bit
- All these things are made possible by using the [Planck Physics Engine](https://piqnt.com/planck.js/) which is used by [P5.Play-Library](https://p5play.org/)

## 🌳The Forest🌳

- The Forest consists of 3 different Tiles:
- Two repeating Background-Tiles (Back & Far)
- The third Tile (Middle) can be repeated, but we pick a random distance between them, to make the Forest look more natural
- Since we have 3 layered Background-Tiles, we use them to create a [Parallax-Effect](https://en.wikipedia.org/wiki/Parallax)
- This [Parallax-Effect](https://en.wikipedia.org/wiki/Parallax) creates an Illusion of depth, making the Forest look a bit "3D"

## 🪴Decorations🪴

- There are 2 different Moss-Sprites and 1 Plant-Sprite
- We just scatter them around randomly on the Ground for some Eye-Candy

## 🐦Birds🐦

- Finally, there are 3 kinds of Birds 🐦 flying around
- These birds get generated on-the-fly
- Each time a Bird gets generated, a random Sprite gets picked out of a pool of 3 Sprites
- When a Bird is too far from the Squirrel 🐿️ (which is what the Camera is centered on) it gets removed and a new Bird gets generated

## Related Projects

I also coded a [Chicken Coop](https://github.com/johnnyawesome/ChickensAndBees) 🐔 using pure [P5JS](https://p5js.org/) goodness.
