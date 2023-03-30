let smallestCoordinate = 25;
let biggestCoordinate = 375;

function setup() {
  createCanvas(400, 400);
}

// returns a random coordinate from the smallest and biggest coordinate 
function getRandomCoordinate() {
  return Math.round(random(smallestCoordinate, biggestCoordinate));
}

//Write a program that writes out the numbers from 0 to 5 using
// a while loop and the text function
function problemOne() {
  // text('word', getRandomCoordinate(), getRandomCoordinate());

}

// Write a program that writes out the numbers from 1 to 5 using
// a while loop and the text funciton
function problemTwo() {
  // text('word', getRandomCoordinate(), getRandomCoordinate());
}

// Write a program that writes out the even numbers from 1 to 5 using
// a for loop and the text function
function problemThree() {
  // text('word', getRandomCoordinate(), getRandomCoordinate());
}

//Write a program that uses either a while or for loop (your choice),
// and writes out "Virus" for maxCount times
function problemFour(maxCount) {

}

function draw() {
  background(220);
  textSize(32); //sets text to 32px

  problemOne();

  // problemTwo();

  // problemThree(); 

  //problemFour(4);

  //Try commenting out the noLoop() funciton and see what it does!
  noLoop();
}
