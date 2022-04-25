let bot = new RiveScript();

const message_container = document.querySelector('.messages');
const form = document.querySelector('form');
const input_box = document.querySelector('input');

//const brains = [
//  'https://gist.githubusercontent.com/awesammcoder/91e0f6c527bfdc03b8815289ca4af150/raw/6410ce00b7e1ea0dbd28be03b6eaab64252a841d/brain.rive'
//];
const brains = [
  //'brain.rive'
//'macro.rive'
  'dumbBrain.rive'
];


bot.loadFile(brains).then(botReady).catch(botNotReady);



function botReply(message){
  
  var comp = select('#comparativeP');
   comp.html(message +" "  +emote);
}

function selfReply(message){
  
  var comp = select('#comparativeP');
   comp.html(message + emote);
  
  bot.reply("local-user", message).then(function(reply) {
    botReply(reply);
  });
}

function botReady(){
  bot.sortReplies().then(sorted).catch(notSorted) ;

  botReply('Hello World');
}

function botNotReady(err){
  console.log("A grue has:", err);
}
function sorted(){
alert("I'm ready for your therapy session");
}
function notSorted(){
console.log("please wait in the lobby while I sort");
alert("please wait in the lobby while I prepare");

}
