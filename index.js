const leftMsg =
  "You come across a stray cat. It scampers off down a small hole, just large enough for you to crawl through. Do you follow it, or continue on your path?";
const followMsg =
  "You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should snitch about this magical safe haven.";
const catStayMsg =
  "You live happily amongst the cats for the rest of your days.";
const snitchMsg =
  "After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless. Later, a familiar cat appears and scratches you. You get stitches.";
const continueMsg =
  "You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take?";
const ladderMsg =
  "After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.";
const staircaseMsg =
  "After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.";
const rightMsg =
  "You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Which do you take: treasure, or away?";
const treasureMsg =
  "The dragon wakes up and sits upright. You only have a moment to respond, to stay or run:";
const dragonStayMsg =
  "You and the dragon have an uplifting conversation about local politics and become lifelong friends.";
const runMsg =
  "Quickly, you run back to the cave's entrance. Sheepish, you return home.";
const dragonAwayMsg =
  "After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?";
const drawMsg =
  "You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.";
const pickMsg =
  "You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.";
const retryMsg =
  "That path is invalid, you died. Please refresh and try again.";

let firstAnswer = window.prompt("Do you head left or right?").toLowerCase();
if (firstAnswer === "left") {
  let secondAnswer = window.prompt(leftMsg).toLowerCase();
  if (secondAnswer === "follow") {
    let thirdAnswer = window.prompt(followMsg).toLowerCase();
    if (thirdAnswer === "stay") {
      alert(catStayMsg);
    } else if (thirdAnswer === "snitch") {
      alert(snitchMsg);
    } else {
      alert(retryMsg);
    }
  } else if (secondAnswer === "continue") {
    let thirdAnswer = window.prompt(continueMsg).toLowerCase();
    if (thirdAnswer === "ladder") {
      alert(ladderMsg);
    } else if (thirdAnswer === "staircase") {
      alert(staircaseMsg);
    } else {
      alert(retryMsg);
    }
  } else {
    alert(retryMsg);
  }
} else if (firstAnswer === "right") {
  let secondAnswer = window.prompt(rightMsg).toLowerCase();
  if (secondAnswer === "treasure") {
    let thirdAnswer = window.prompt(treasureMsg).toLowerCase();
    if (thirdAnswer === "stay") {
      alert(dragonStayMsg);
    } else if (thirdAnswer === "run") {
      alert(runMsg);
    } else {
      alert(retryMsg);
    }
  } else if (secondAnswer === "away") {
    let thirdAnswer = window.prompt(dragonAwayMsg).toLowerCase();
    if (thirdAnswer === "draw it") {
      alert(drawMsg);
    } else if (thirdAnswer === "pick it") {
      alert(pickMsg);
    } else {
      alert(retryMsg);
    }
  } else {
    alert(retryMsg);
  }
} else {
  alert(retryMsg);
}
