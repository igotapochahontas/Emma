let bot = new RiveScript();

const message_container = document.querySelector('wordlistP');
//const form = document.querySelector('form');
var input_box = document.querySelector('txt');

//const brains = [
//  'https://gist.githubusercontent.com/awesammcoder/91e0f6c527bfdc03b8815289ca4af150/raw/6410ce00b7e1ea0dbd28be03b6eaab64252a841d/brain.rive'
//];
const brains = [
  'brain.rive'
'macro.rive'
  //'dumbBrain.rive'
];


bot.loadFile(brains).then(botReady).catch(botNotReady);

input_box.addEventListener('submit', (e) => {
  e.preventDefault();
  selfReply(input_box.value);
  input_box.value = '';
});

function botReply(message){
  message_container.innerHTML += `<div class="bot">${message}</div>`;
  location.href = '#wordlistP';
}

function selfReply(message){
  message_container.innerHTML += `<div class="self">${message}</div>`;
  location.href = '#wordlistP';
  
  bot.reply("local-user", message).then(function(reply) {
    botReply(reply);
  });
}

function botReady(){
  bot.sortReplies().then(sorted).catch(notSorted) ;

  botReply('Hello');
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
