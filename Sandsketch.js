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
        scoredwordspush(word + ': ' + score + ' ');

      }
    }
emote = "🤔";
  if (totalScore > 0){
emote = "😊";}
if (totalScore < 0){
emote = "😒";}

    var scorePar = select('#scoreP');
    scorePar.html('score: ' + totalScore);
    var comp = select('#comparativeP');
   comp.html('I feel ' + emote);
 //comp.html('comparative: ' + totalScore / words.length);
    var wordlist = select('#wordlistP');
    wordlist.html(scoredwords);

    //console.log(txt.value());
  }
}





function draw() {

}
