let context = document.getElementById("canvas").getContext("2d");

// style
context.strokeStyle = "greenyellow";
context.beginPath();

// head
context.arc(350, 150, 80, 0, Math.PI * 2);

// body
context.moveTo(350, 230);
context.lineTo(350, 450);

// legs
context.moveTo(350, 450);
context.lineTo(220, 600);

context.moveTo(350, 450);
context.lineTo(480, 600);

// arms
context.moveTo(350, 360);
context.lineTo(200, 250);

context.moveTo(350, 360);
context.lineTo(500, 250);

// stroke
context.lineWidth = 50;
context.stroke();
