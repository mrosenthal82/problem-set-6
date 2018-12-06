/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
  let canvas = document.getElementById('canvas1');
  let op = canvas.getContext("2d");
  op.font = "48px sans-serif";
  op.strokeText('Hello, World!', 10, 50);
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
  let op = document.getElementById('canvas2').getContext("2d");
  let height = Number(prompt("Height:"));
  let width = Number(prompt("Width:"));
  let x =  Number(prompt("X:"));
  let y = Number(prompt("Y:"));

  if (height + y > 512 || width + x > 1024){
    alert("The rectangle will not fit on the canvas");
  } else if (height < 1){
    alert("Height is too small");
  } else if (width < 1){
    alert("Width is too small");
  } else if (x < 5){
    alert("X is too small");
  } else if (y < 5){
    alert("Y is too small");
  } else if (isNaN(height) || isNaN(width) || isNaN(x) || isNaN(y)){
    alert("One of your inputs is not a number");
  } else {
    op.clearRect(0,0,1024,512);
    op.fillStyle = "gray";
    op.fillRect(x-1, y-1, width+2, height+2);
    op.fillStyle = "white";
    op.fillRect(x+1, y+1, width-2, height-2);
  }
}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
  let op = document.getElementById("canvas3").getContext("2d");
  let color = String(prompt("Color:"));
  if (color == "black" || color == "blue" || color =="green" || color == "orange" || color == "purple" || color == "red" || color == "yellow"){
    op.fillStyle = color;
    op.fillRect(10, 10, 100, 50);
  } else {
    alert(color+" is not a supported color");
    op.clearRect(0, 0, 1024, 512);
  }
}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
  let op = document.getElementById("canvas4").getContext("2d");
  op.clearRect(0, 0, 1024, 512);
  let sides = [];
  let input;
  for (let i = 0; i<3; i++){
    do {
      input = Number(prompt(`Side ${i+1}:`));
    } while (isNaN(input) || input<=0);
    sides.push(input);
  }
  let a = Math.min(...sides);
  let c = Math.max(...sides);
  let b = sides.reduce((x,y) => x + y, 0) - a - c;
  if (c*c != a*a+b*b){
    alert("This is not a valid right triangle.");
  } else if (a>1024 || b>512){
    alert("The triangle will not fit on the canvas.");
  } else {
    op.beginPath();
    op.moveTo(10,10);
    op.lineTo(10, a+10);
    op.lineTo(b+10, a+10);
    op.lineTo(10,10);
    op.stroke();
    op.closePath();
  }
}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
  let op = document.getElementById("canvas5").getContext("2d");
  op.clearRect(0,0,1024,512);
  let radius;
  do {
    radius = Number(prompt("Radius"));
  } while (isNaN(radius) || radius<1 || radius>250.5);
  op.beginPath();
  op.arc(radius+10, radius+10, radius, 0, Math.PI*2, true);
  op.moveTo(10+radius*.6, radius+10-radius/2);
  op.arc(radius+10-radius/2, radius+10-radius/2, radius*.1, 0, Math.PI*2, true);
  op.moveTo(10+radius*1.6, radius+10-radius/2);
  op.arc(radius+10+radius/2, radius+10-radius/2, radius*.1, 0, Math.PI*2, true);
  op.moveTo(10+radius*1.7, radius+10);
  op.arc(radius+10, radius+10, radius*.7, 0, Math.PI, false);
  op.stroke();
  op.closePath();
}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {

}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {

}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {

}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {

}
