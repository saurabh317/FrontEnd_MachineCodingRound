// problem statement: on click create a circle of random radius and on second click create one another circle
// on third click remove the other two circles and create a new one. also check if both the circles are intersecting

const body = document.getElementById('full');
const maxLimit = 400;
const minLimit = 50;
let coOrdinates = [];

const checkIntersection = (circlesLength, coOrdinates) => {
  if (circlesLength === 1) {
    const [circ1, circ2] = coOrdinates;
    const dx = circ2.x - circ1.x;
    const dy = circ2.y - circ1.y;

    //Finding the distance between two points
    const distanceBtwTwoCenters = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    const sumOfRadius = circ1.r + circ2.r
    if (distanceBtwTwoCenters < sumOfRadius) {
      console.log("circles are intersecting")
    }
  }
}

body.addEventListener('click', (e) => {
  // check if there is already 2 circles exists if yes then clear them
  const circles = document.querySelectorAll('.circle')

  if(circles.length == 2) {
    circles.forEach((circle) => body.removeChild(circle))
    coOrdinates = [];
  }

  // create a random number for the radius of the circle
  const random = Math.floor(Math.random() * (maxLimit - minLimit) + minLimit)
  const xAxis = e.clientX;
  const yAxis = e.clientY;

  // create a circle with random width and append it into the div
  const circle = document.createElement('div');
  circle.className = 'circle';
  const styles = {
    border: '4px solid black',
    position: "absolute",
    width: `${random}px`,
    height: `${random}px`,
    borderRadius: '50%',
    top: `${yAxis - random/2}px`,
    left: `${xAxis - random/2}px`
  }

  Object.assign(circle.style, styles)
  body.appendChild(circle);

  // check for intersection of two circles
  coOrdinates.push({x: xAxis - random/2, y: yAxis - random/2, r: random/2})
  checkIntersection(circles.length, coOrdinates)

})
