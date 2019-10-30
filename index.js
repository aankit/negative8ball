var predictions = [
  "Better Not Tell You Now",
  "Your Question is Not Right For Me",
  "Ask Again, Never",
  "Sorry",
  "My Sources Say No",
  "As I See It, No",
  "Cannot Predict Now",
  "Concentrate and Ask Again",
  "Don't Count on It",
  "It is Decidely No",
  "Most Likely Not",
  "My Reply is No",
  "Outlook Not so Good",
  "Reply Hazy, Try Again Never",
  "Signs Point to No",
  "Very Doubtful",
  "Without a Doubt, No",
  "Definitely, No",
  "What is the Monetary Value",
  "Ask someone else"
];

function startup() {
  var el = document.getElementsByTagName("canvas")[0];
  var ctx = el.getContext("2d");
  ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  ctx.fillStyle = '#2B5DFF';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  el.addEventListener("touchstart", handleStart, false);
  el.addEventListener("touchend", handleEnd, false);
  el.addEventListener("touchcancel", handleCancel, false);
  el.addEventListener("touchmove", handleMove, false);
}

function handleStart(evt) {
  //evt.preventDefault();
  var log = document.getElementById("log").innerHTML = "touch!";
  var canvas = document.getElementsByTagName("canvas")[0];
  var ctx = canvas.getContext("2d");
  
  //sizing variables
  var scalar = 15;
  var midX = ctx.canvas.width/2;

  var line_height = ctx.canvas.height*0.15;
  // var triA = 
  // var triB = 
  // var triC = 
    ctx.fillStyle = '#2B5DFF';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";
  ctx.font = "15vw Helvetica";
  var answer = predictions[Math.floor(Math.random() * predictions.length)];
  var answer_lines = getLines(ctx, answer, canvas.width);
  var midY = ctx.canvas.height/2 - (answer_lines.length*30);
  ctx.textAlign = "center";
  for(var i=0; i<answer_lines.length; i++){
    console.log("here");
    ctx.fillText(answer_lines[i], midX, midY+(i*line_height));

  }
}

function handleMove(evt) {
  evt.preventDefault();
}

function handleEnd(evt) {
  evt.preventDefault();
}

function handleCancel(evt) {
  evt.preventDefault();

}

function getLines(ctx, text, maxWidth) {
    var words = text.split(" ");
    var lines = [];
    var currentLine = words[0];

    for (var i = 1; i < words.length; i++) {
        var word = words[i];
        var width = ctx.measureText(currentLine + " " + word).width;
        if (width < maxWidth) {
            currentLine += " " + word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
        maxWidth = maxWidth - 50;
    }
    lines.push(currentLine);
    return lines;
}
