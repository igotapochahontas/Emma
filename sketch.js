// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/VV1JmMYceJw


var afinn;

function preload() {
  afinn = loadJSON('afinn111.json');
}


function setup() {
  noCanvas();
  console.log(afinn);

  var txt = select('#txt');
  txt.input(typing);

  function typing() {
    var textinput = txt.value();
    var words = textinput.split(/\W/);
    console.log(words);
    var emote = "🤔"; 
    var scoredwords = [];
    var totalScore = 0;
    for (var i = 0; i < words.length; i++) {
      var word = words[i].toLowerCase();
      if (afinn.hasOwnProperty(word)) {
        var score = afinn[word];
        console.log(word, score);
        totalScore += Number(score);
        scoredwords.push(word + ': ' + score + ' ');

      }
    }
emote = "🤔";
  
switch (score) {
  case 0:
    emote = "🤔";
    break;
  case 1:
    emote = "😐";
    break;
  case 2:
     emote = "☺";
    break;
  case 3:
    emote = "😀";
    break;
  case 4:
    emote = "😁";
    break;
  case 5:
    emote = "😍";
    break;
 
  case -1:
    emote = "😑";
    break;
  case -2:
     emote = "😒";
    break;
  case -3:
    emote = "😩";
    break;
  case -4:
    emote = "😡";
    break;
  case -5:
    emote = "😤";
    break;
default:
emote = "🤔"
}
var day;
   var tday= (totalScore / words.length);
if (tday > 1){
day  = "great";}
else if (tday < 0){
day = "crappy";}
else {day = "ok";}
    var scorePar = select('#scoreP');
    scorePar.html('My day is: ' + day + ' so far');
   // scorePar.html('score: ' + totalScore);
    var comp = select('#comparativeP');
   comp.html('I feel ' + emote);
 //
    var wordlist = select('#wordlistP');
    wordlist.html(scoredwords);

    //console.log(txt.value());
  }
}





function draw() {

}
